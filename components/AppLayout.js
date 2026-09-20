'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // If on the login page, render children directly without dashboard chrome
  if (pathname === '/login') {
    return <main className="min-h-screen bg-slate-100">{children}</main>;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} />
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto print:p-0 print:m-0">
          {children}
        </main>
      </div>
    </div>
  );
}

