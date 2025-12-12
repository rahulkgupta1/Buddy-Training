import { Mail, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const messages = [
  {
    id: 1,
    clientInitial: 'A',
    clientName: 'Aarav',
    message: 'Thank you for the last session, it really helped me understand my anxiety better.',
    time: '2 hours ago',
    isNew: true,
  },
  {
    id: 2,
    clientInitial: 'P',
    clientName: 'Priya',
    message: 'I have been practicing the breathing exercises. Can we discuss more about...',
    time: '1 day ago',
    isNew: false,
  },
  {
    id: 3,
    clientInitial: 'R',
    clientName: 'Rahul',
    message: 'I would like to reschedule our next session to next week if possible.',
    time: '3 days ago',
    isNew: false,
  },
];

const RecentMessages = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
          <p className="text-sm text-gray-500">Latest messages from your clients</p>
        </div>
        <Link href="/dashboard/messages" className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium">{msg.clientInitial}</span>
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{msg.clientName}</h3>
                {msg.isNew && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">
                <Mail className="inline h-3.5 w-3.5 mr-1 text-gray-400" />
                {msg.message}
              </p>
              <div className="mt-1 flex items-center text-xs text-gray-400">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{msg.time}</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-2" />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/dashboard/messages" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          View All Messages
        </Link>
      </div>
    </div>
  );
};

export default RecentMessages;
