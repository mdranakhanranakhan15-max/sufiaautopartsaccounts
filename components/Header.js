'use client';

import { useSession, signOut } from 'next-auth/react';
import { LogOut, User, Shield, Menu } from 'lucide-react';

export default function Header({ onToggleSidebar }) {
  const { data: session } = useSession();

  if (!session) return null;

  const roleColors = {
    admin: 'bg-purple-100 text-purple-800 border-purple-200',
    manager: 'bg-blue-100 text-blue-800 border-blue-200',
    staff: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  };

  return (
    <header className="h-16 border-b border-slate-200 bg-white px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 print:hidden">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-sm font-semibold text-slate-800 hidden sm:inline-block">
          Sufia Auto Management Portal
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* User Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold uppercase">
            {session.user?.name?.charAt(0) || 'U'}
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-semibold text-slate-900 leading-tight">
              {session.user?.name || 'User'}
            </p>
            <p className="text-[11px] text-slate-500 leading-tight">
              {session.user?.email}
            </p>
          </div>
          <span
            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
              roleColors[session.user?.role] || 'bg-slate-100 text-slate-800 border-slate-200'
            }`}
          >
            {session.user?.role || 'staff'}
          </span>
        </div>

        {/* Sign Out Button */}
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          title="Sign Out"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}

