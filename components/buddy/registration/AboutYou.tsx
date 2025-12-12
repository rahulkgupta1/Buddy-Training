import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type FormData = {
  bio: string;
  experience: string;
  certifications: string;
};

type AboutYouProps = {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function AboutYou({ formData, handleChange }: AboutYouProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">About You</h2>
      <p className="text-gray-600">Tell us more about yourself and your experience.</p>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="bio" className="block text-sm font-medium">
            Bio*
          </Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell people about your approach to mental health support and what drives your passion for helping others..."
            className="mt-1 min-h-[100px]"
            required
          />
        </div>

        <div>
          <Label htmlFor="experience" className="block text-sm font-medium">
            Experience & Background
          </Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Share your relevant experience, training, or personal journey that led you to become a buddy..."
            className="mt-1 min-h-[100px]"
          />
        </div>

        <div>
          <Label htmlFor="certifications" className="block text-sm font-medium">
            Certifications & Training
          </Label>
          <Textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="List any relevant certifications, courses, or training programs..."
            className="mt-1 min-h-[80px]"
          />
          <p className="mt-1 text-xs text-gray-500">
            Separate items with commas
          </p>
        </div>
      </div>
    </div>
  );
}
