import React from 'react';
import { cn } from '@/lib/utils';

export function Table({ className, ...props }) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn('w-full caption-bottom text-sm text-left', className)} {...props} />
    </div>
  );
}

export function TableHeader({ className, ...props }) {
  return <thead className={cn('border-b border-slate-200 bg-slate-50 text-xs text-slate-500 uppercase', className)} {...props} />;
}

export function TableBody({ className, ...props }) {
  return <tbody className={cn('divide-y divide-slate-200', className)} {...props} />;
}

export function TableFooter({ className, ...props }) {
  return <tfoot className={cn('border-t bg-slate-50 font-medium', className)} {...props} />;
}

export function TableRow({ className, ...props }) {
  return (
    <tr
      className={cn('transition-colors hover:bg-slate-50/80 data-[state=selected]:bg-slate-100', className)}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }) {
  return (
    <th
      className={cn('h-10 px-4 text-left align-middle font-semibold text-slate-600', className)}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }) {
  return <td className={cn('p-4 align-middle text-slate-800', className)} {...props} />;
}

