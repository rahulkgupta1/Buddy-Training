'use client';

import Link from 'next/link';
import { Home, Users, MessageSquare, Calendar, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#2563EB]">Panha</h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        <Link href="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium text-white bg-[#2563EB] rounded-lg">
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        
        <Link href="/dashboard/clients" className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#64748B] hover:bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-3" />
            Clients
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
        
        <Link href="/dashboard/messages" className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#64748B] hover:bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-3" />
            Messages
          </div>
          <span className="inline-flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-[#2563EB] rounded-full">3</span>
        </Link>
        
        <Link href="/dashboard/schedule" className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#64748B] hover:bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3" />
            Schedule
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
        
        <Link href="/dashboard/reports" className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#64748B] hover:bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-5 w-5 mr-3" />
            Reports
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
        
        <Link href="/dashboard/settings" className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#64748B] hover:bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium text-sm">PA</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Pawan Aray</p>
              <p className="text-xs text-gray-500">Mental Health Buddy</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
