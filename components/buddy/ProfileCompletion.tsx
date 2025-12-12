import { User, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ProfileCompletion = () => {
  const completionPercentage = 85;
  const completedItems = [
    'Basic Information',
    'Profile Picture',
    'Professional Bio',
    'Areas of Expertise',
    'Availability'
  ];

  const remainingItems = [
    'Add at least 2 more certifications',
    'Complete your payment information'
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Profile Completion</h2>
        <p className="text-sm text-gray-500">Complete your profile to attract more clients</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Profile Strength</span>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Completed</h3>
        <ul className="space-y-2">
          {completedItems.map((item, index) => (
            <li key={`completed-${index}`} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-sm font-medium text-gray-700 mt-4">Remaining</h3>
        <ul className="space-y-2">
          {remainingItems.map((item, index) => (
            <li key={`remaining-${index}`} className="flex items-center text-sm text-gray-600">
              <div className="h-4 w-4 rounded-full border-2 border-gray-300 mr-2"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link 
          href="/dashboard/profile/edit" 
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Complete Your Profile
        </Link>
      </div>

      <div className="mt-4 text-center">
        <Link href="/dashboard/profile" className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View Public Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCompletion;
