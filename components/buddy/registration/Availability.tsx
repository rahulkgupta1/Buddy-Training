import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type FormData = {
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    timeSlots: string[];
  };
};

type AvailabilityProps = {
  formData: FormData['availability'];
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const DAYS = [
  { id: 'monday', label: 'Monday' },
  { id: 'tuesday', label: 'Tuesday' },
  { id: 'wednesday', label: 'Wednesday' },
  { id: 'thursday', label: 'Thursday' },
  { id: 'friday', label: 'Friday' },
  { id: 'saturday', label: 'Saturday' },
  { id: 'sunday', label: 'Sunday' },
];

// Generate time slots for all 24 hours in 2-hour intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour += 2) {
    const startHour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format
    const endHour = (hour + 2) % 12 || 12; // Convert 0 to 12 for 12-hour format
    const period = hour < 12 ? 'AM' : 'PM';
    const nextPeriod = (hour + 2) <= 11 ? period : (period === 'AM' ? 'PM' : 'AM');
    
    // Handle 12-hour format edge cases
    const displayStartHour = startHour === 12 && hour === 0 ? 12 : startHour;
    const displayEndHour = endHour === 12 && (hour + 2) % 24 === 0 ? 12 : endHour;
    
    slots.push({
      label: `${displayStartHour}:00 ${period} - ${displayEndHour}:00 ${nextPeriod}`,
      value: `${String(hour).padStart(2, '0')}:00-${String((hour + 2) % 24).padStart(2, '0')}:00`
    });
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export default function Availability({ formData, setFormData }: AvailabilityProps) {
  const toggleDay = (day: string) => {
    setFormData((prev: any) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: !prev.availability[day]
      }
    }));
  };

  const [customSlot, setCustomSlot] = useState('');
  const [customSlots, setCustomSlots] = useState<string[]>([]);

  const toggleTimeSlot = (timeSlot: string) => {
    setFormData((prev: any) => {
      // Ensure we're working with the latest state
      const currentTimeSlots = Array.isArray(prev.timeSlots) ? [...prev.timeSlots] : [];
      
      // Toggle the time slot
      const updatedTimeSlots = currentTimeSlots.includes(timeSlot)
        ? currentTimeSlots.filter((slot) => slot !== timeSlot) // Remove if exists
        : [...currentTimeSlots, timeSlot]; // Add if doesn't exist
      
      // Return the updated state
      return {
        ...prev,
        timeSlots: updatedTimeSlots
      };
    });
  };

  const addCustomSlot = () => {
    if (customSlot && !customSlots.includes(customSlot) && !TIME_SLOTS.some(slot => slot.value === customSlot)) {
      setCustomSlots([...customSlots, customSlot]);
      setCustomSlot('');
      
      // Also add to form data
      setFormData((prev: any) => ({
        ...prev,
        availability: {
          ...prev.availability,
          timeSlots: [...(prev.availability.timeSlots || []), customSlot]
        }
      }));
    }
  };

  const removeCustomSlot = (slotToRemove: string) => {
    setCustomSlots(customSlots.filter((slot: string) => slot !== slotToRemove));
    
    // Also remove from form data
    setFormData((prev: any) => ({
      ...prev,
      availability: {
        ...prev.availability,
        timeSlots: (prev.availability.timeSlots || []).filter((slot: string) => slot !== slotToRemove)
      }
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Availability</h2>
      <p className="text-gray-600">When are you available for sessions?</p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-3">Days of the Week</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {DAYS.map((day) => (
              <div key={day.id} className="flex items-center space-x-2">
                <Checkbox
                  id={day.id}
                  checked={formData[day.id as keyof typeof formData] as boolean}
                  onCheckedChange={() => toggleDay(day.id)}
                />
                <Label htmlFor={day.id} className="text-sm font-medium">
                  {day.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <h3 className="font-medium mb-3">Preferred Time Slots</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isSelected = Array.isArray(formData.timeSlots) && formData.timeSlots.includes(slot.value);
                return (
                  <Button
                    key={slot.value}
                    type="button"
                    variant={isSelected ? 'default' : 'outline'}
                    className={`justify-start text-sm transition-colors duration-200 ${
                      isSelected 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => toggleTimeSlot(slot.value)}
                  >
                    {isSelected && (
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {slot.label}
                  </Button>
                );
              })}
            </div>

            {/* Custom Time Slot Input */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium mb-2">Add Custom Time Slot</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customSlot}
                  onChange={(e) => setCustomSlot(e.target.value)}
                  placeholder="e.g., 08:30-10:30"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={addCustomSlot}
                  disabled={!customSlot}
                >
                  Add
                </Button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Format: HH:MM-HH:MM (24-hour format)
              </p>

              {/* Display custom slots */}
              {customSlots.length > 0 && (
                <div className="mt-3">
                  <h5 className="text-sm font-medium mb-2">Your Custom Slots:</h5>
                  <div className="flex flex-wrap gap-2">
                    {customSlots.map((slot) => (
                      <div 
                        key={slot} 
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-sm"
                      >
                        {slot}
                        <button 
                          type="button"
                          onClick={() => removeCustomSlot(slot)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
