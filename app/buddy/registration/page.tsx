'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PersonalInfo from '@/components/buddy/registration/PersonalInfo';
import AreasOfExpertise from '@/components/buddy/registration/AreasOfExpertise';
import Availability from '@/components/buddy/registration/Availability';
import AboutYou from '@/components/buddy/registration/AboutYou';

export default function BuddyRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    phone: '',
    location: '',
    languages: [],
    
    // Step 2: Areas of Expertise
    expertise: [] as string[],
    
    // Step 3: Availability
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      timeSlots: [] as string[],
    },
    
    // Step 4: About You
    bio: '',
    experience: '',
    certifications: '',
  });

  const router = useRouter();
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit form and redirect to success
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      // Submit the form data to your API
      const response = await fetch('/api/buddy/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          email: 'user@example.com' // You should get this from the form or user session
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      // Redirect to success page or show success message
      router.push('/registration/success');
            console.log('Payment successful:', response);
            // Redirect to success page with payment details
            router.push('/buddy/registration/success');
          },
          prefill: {
            name: formData.fullName,
            contact: formData.phone,
            email: 'user@example.com', // You should get this from the form or user session
          },
          notes: {
            registrationType: 'buddy',
          },
          theme: {
            color: '#2563eb', // Matching your brand color
          },
          modal: {
            ondismiss: function() {
              // Handle when user closes the payment form
              console.log('Payment form closed');
            }
          }
        });

        rzp.on('payment.failed', function(response: any) {
          console.error('Payment failed:', response.error);
          alert('Payment failed. Please try again.');
        });

        rzp.open();
      };
      document.body.appendChild(script);
      
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return <AreasOfExpertise formData={formData} setFormData={setFormData} />;
      case 3:
        return <Availability formData={formData.availability} setFormData={setFormData} />;
      case 4:
        return <AboutYou formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Complete Your Buddy Profile</h1>
            <span className="text-sm font-medium text-gray-500">
              Step {step} of {totalSteps}
            </span>
          </div>
          
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {renderStep()}

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className={`px-4 py-2 rounded-md ${step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {step === totalSteps ? 'Complete Profile' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
