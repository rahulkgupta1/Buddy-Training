import { Button } from '@/components/ui/button';

type FormData = {
  expertise: string[];
};

type AreasOfExpertiseProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const EXPERTISE_AREAS = [
  'Anxiety & Stress',
  'Relationships',
  'Self-Esteem',
  'Work-Life Balance',
  'Grief & Loss',
  'Depression',
  'Anger Management',
  'Life Transitions'
];

export default function AreasOfExpertise({ formData, setFormData }: AreasOfExpertiseProps) {
  const toggleExpertise = (area: string) => {
    setFormData((prev: any) => {
      const newExpertise = prev.expertise.includes(area)
        ? prev.expertise.filter((e: string) => e !== area)
        : [...prev.expertise, area];
      
      return {
        ...prev,
        expertise: newExpertise
      };
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Areas of Expertise</h2>
      <p className="text-gray-600">What areas can you provide support in? (Select all that apply)</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {EXPERTISE_AREAS.map((area) => (
          <Button
            key={area}
            type="button"
            variant={formData.expertise.includes(area) ? 'default' : 'outline'}
            className={`h-auto py-3 px-4 text-left whitespace-normal min-h-[60px] ${formData.expertise.includes(area) ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-50'}`}
            onClick={() => toggleExpertise(area)}
          >
            {area}
          </Button>
        ))}
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Selected: {formData.expertise.length > 0 ? formData.expertise.join(', ') : 'None'}
        </p>
      </div>
    </div>
  );
}
