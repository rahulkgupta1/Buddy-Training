import { Metadata } from 'next';
import Sidebar from '@/components/buddy/Sidebar';
import DashboardHeader from '@/components/buddy/DashboardHeader';
import StatsSection from '@/components/buddy/StatsSection';
import UpcomingSessions from '@/components/buddy/UpcomingSessions';
import RecentMessages from '@/components/buddy/RecentMessages';
import ProfileCompletion from '@/components/buddy/ProfileCompletion';

export const metadata: Metadata = {
  title: 'Panha Buddy Dashboard',
  description: 'Your mental health buddy dashboard',
};

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#1E293B]">Welcome back, Pawan!</h1>
            <p className="text-[#64748B] text-sm">Here&apos;s what&apos;s happening with your practice today.</p>
          </div>

          <StatsSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <UpcomingSessions />
              <RecentMessages />
            </div>
            <div className="lg:col-span-1">
              <ProfileCompletion />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
