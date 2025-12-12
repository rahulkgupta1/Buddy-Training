import { Users, Clock, MessageSquare, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string | number;
  changeType?: 'increase' | 'decrease';
}

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeType = 'increase' 
}: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${
        title === 'Total Sessions' ? 'bg-blue-50' : 
        title === 'Active Clients' ? 'bg-green-50' :
        title === 'Messages' ? 'bg-purple-50' : 'bg-amber-50'
      }`}>
        <Icon className={`h-6 w-6 ${
          title === 'Total Sessions' ? 'text-blue-600' : 
          title === 'Active Clients' ? 'text-green-600' :
          title === 'Messages' ? 'text-purple-600' : 'text-amber-600'
        }`} />
      </div>
    </div>
    {change && (
      <div className={`mt-4 flex items-center text-sm ${
        changeType === 'increase' ? 'text-green-600' : 'text-red-600'
      }`}>
        {changeType === 'increase' ? (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2V8a1 1 0 011-1h4z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        )}
        <span className="ml-1">{change} from last month</span>
      </div>
    )}
  </div>
);

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        title="Total Sessions" 
        value="125" 
        icon={Clock}
        change="+12%"
        changeType="increase"
      />
      <StatCard 
        title="Active Clients" 
        value="24" 
        icon={Users}
        change="+4"
        changeType="increase"
      />
      <StatCard 
        title="Messages" 
        value="36" 
        icon={MessageSquare}
        change="+8"
        changeType="increase"
      />
      <StatCard 
        title="Avg. Rating" 
        value="4.9" 
        icon={Star}
        change="+0.2"
        changeType="increase"
      />
    </div>
  );
};

export default StatsSection;
