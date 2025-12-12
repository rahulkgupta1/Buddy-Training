import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FormData = {
  fullName: string;
  phone: string;
  location: string;
  languages: string[];
};

type PersonalInfoProps = {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PersonalInfo({ formData, handleChange }: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name*</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone No*</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="location">Location*</Label>
          <Input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="languages">Languages Spoken*</Label>
          <Input
            id="languages"
            name="languages"
            type="text"
            value={formData.languages.join(', ')}
            onChange={(e) => {
              const languages = e.target.value.split(',').map(lang => lang.trim());
              handleChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'languages',
                  value: languages
                }
              } as any);
            }}
            placeholder="e.g., English, Hindi, Spanish"
            required
            className="mt-1"
          />
          <p className="text-xs text-gray-500 mt-1">Separate languages with commas</p>
        </div>
      </div>
    </div>
  );
}
