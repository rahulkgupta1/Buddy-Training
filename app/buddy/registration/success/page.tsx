'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RegistrationSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      router.push('/buddy/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>
        
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Profile Created Successfully!
        </h2>
        
        <p className="mt-2 text-gray-600">
          Welcome to PANHA Buddy! Your profile has been created successfully.
          You'll be redirected to your dashboard in a few seconds.
        </p>
        
        <div className="mt-8">
          <Button 
            onClick={() => router.push('/buddy/dashboard')}
            className="px-8 py-4 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-blue-800"
          >
            Go to Dashboard Now
          </Button>
        </div>
        
        <p className="mt-4 text-sm text-gray-500">
          Redirecting in 5 seconds...
        </p>
      </div>
    </div>
  );
}
