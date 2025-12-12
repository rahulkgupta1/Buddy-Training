import { ArrowUp, Users, Clock, Star } from 'lucide-react';

const MetricCard = ({ title, value, icon: Icon, change }: { title: string; value: string; icon: any; change?: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
      <div className="p-3 rounded-lg bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    {change && (
      <div className="mt-4 flex items-center text-sm text-green-600">
        <ArrowUp className="h-4 w-4" />
        <span className="ml-1">{change} from last month</span>
      </div>
    )}
  </div>
);

const MetricsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        title="Total Sessions" 
        value="125" 
        icon={Clock}
      />
      <MetricCard 
        title="This Month" 
        value="18" 
        icon={Clock}
        change="+2.1%"
      />
      <MetricCard 
        title="Active Clients" 
        value="12" 
        icon={Users}
      />
      <MetricCard 
        title="Avg. Rating" 
        value="4.9" 
        icon={Star}
        change="+0.2"
      />
    </div>
  );
};

export default MetricsSection;
