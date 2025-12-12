import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Session {
  id: number;
  clientInitial: string;
  clientName: string;
  topic: string;
  date: string;
  time: string;
  status: string;
}

const sessions: Session[] = [
  {
    id: 1,
    clientInitial: 'A',
    clientName: 'Aarav',
    topic: 'Anxiety & Stress',
    date: '18-10-2025',
    time: '10:00 AM',
    status: 'Upcoming',
  },
  {
    id: 2,
    clientInitial: 'P',
    clientName: 'Priya',
    topic: 'Relationship Issues',
    date: '19-10-2025',
    time: '02:30 PM',
    status: 'Upcoming',
  },
  {
    id: 3,
    clientInitial: 'R',
    clientName: 'Rahul',
    topic: 'Career Guidance',
    date: '20-10-2025',
    time: '11:00 AM',
    status: 'Upcoming',
  },
];

const UpcomingSessions = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h2>
          <p className="text-sm text-gray-500">Your next 3 scheduled sessions</p>
        </div>
        <Link 
          href="/dashboard/sessions" 
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div 
            key={session.id} 
            className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium">{session.clientInitial}</span>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{session.clientName}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {session.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">{session.topic}</p>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                <span className="mr-4">{session.date}</span>
                <Clock className="h-4 w-4 mr-1 text-gray-400" />
                <span>{session.time}</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link 
          href="/dashboard/schedule" 
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Schedule New Session
        </Link>
      </div>
    </div>
  );
};

export default UpcomingSessions;
