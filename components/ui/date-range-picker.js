'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, X, ChevronDown } from 'lucide-react';
import { format, subDays, startOfMonth, endOfMonth, startOfDay, endOfDay } from 'date-fns';
import { Button } from '@/components/ui/button';

export function DateRangePicker({ dateRange, setDateRange }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePreset = (preset) => {
    const today = new Date();
    switch (preset) {
      case 'today':
        setDateRange({
          from: format(startOfDay(today), 'yyyy-MM-dd'),
          to: format(endOfDay(today), 'yyyy-MM-dd'),
          label: 'Today',
        });
        break;
      case 'yesterday':
        const yest = subDays(today, 1);
        setDateRange({
          from: format(startOfDay(yest), 'yyyy-MM-dd'),
          to: format(endOfDay(yest), 'yyyy-MM-dd'),
          label: 'Yesterday',
        });
        break;
      case '7days':
        setDateRange({
          from: format(startOfDay(subDays(today, 6)), 'yyyy-MM-dd'),
          to: format(endOfDay(today), 'yyyy-MM-dd'),
          label: 'Last 7 Days',
        });
        break;
      case '30days':
        setDateRange({
          from: format(startOfDay(subDays(today, 29)), 'yyyy-MM-dd'),
          to: format(endOfDay(today), 'yyyy-MM-dd'),
          label: 'Last 30 Days',
        });
        break;
      case 'thisMonth':
        setDateRange({
          from: format(startOfMonth(today), 'yyyy-MM-dd'),
          to: format(endOfMonth(today), 'yyyy-MM-dd'),
          label: 'This Month',
        });
        break;
      case 'clear':
        setDateRange({ from: '', to: '', label: '' });
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const handleCustomDate = (key, val) => {
    setDateRange((prev) => ({
      ...prev,
      [key]: val,
      label: 'Custom Range',
    }));
  };

  const hasFilter = Boolean(dateRange.from || dateRange.to);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div className="flex items-center gap-1.5">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className={`h-9 px-3 text-xs flex items-center gap-2 border-slate-300 font-normal ${
            hasFilter ? 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900 font-medium' : 'bg-white'
          }`}
        >
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>
            {dateRange.label
              ? dateRange.label
              : dateRange.from && dateRange.to
              ? `${dateRange.from} to ${dateRange.to}`
              : dateRange.from
              ? `From ${dateRange.from}`
              : dateRange.to
              ? `Until ${dateRange.to}`
              : 'Filter by Date'}
          </span>
          <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
        </Button>

        {hasFilter && (
          <button
            type="button"
            onClick={() => handlePreset('clear')}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            title="Clear date filter"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 z-50 w-72 rounded-xl bg-white p-4 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Select Date Range
              </span>
              {hasFilter && (
                <button
                  type="button"
                  onClick={() => handlePreset('clear')}
                  className="text-[11px] text-red-600 hover:underline font-semibold"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => handlePreset('today')}
                className="px-2.5 py-1.5 rounded-lg text-left hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => handlePreset('yesterday')}
                className="px-2.5 py-1.5 rounded-lg text-left hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                Yesterday
              </button>
              <button
                type="button"
                onClick={() => handlePreset('7days')}
                className="px-2.5 py-1.5 rounded-lg text-left hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                Last 7 Days
              </button>
              <button
                type="button"
                onClick={() => handlePreset('30days')}
                className="px-2.5 py-1.5 rounded-lg text-left hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                Last 30 Days
              </button>
              <button
                type="button"
                onClick={() => handlePreset('thisMonth')}
                className="col-span-2 px-2.5 py-1.5 rounded-lg text-left hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                This Month
              </button>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Custom Range
              </span>
              <div className="space-y-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-0.5">From</label>
                  <input
                    type="date"
                    value={dateRange.from || ''}
                    onChange={(e) => handleCustomDate('from', e.target.value)}
                    className="w-full px-2.5 py-1 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-0.5">To</label>
                  <input
                    type="date"
                    value={dateRange.to || ''}
                    onChange={(e) => handleCustomDate('to', e.target.value)}
                    className="w-full px-2.5 py-1 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>
            </div>

            <Button
              type="button"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-full h-8 text-xs font-semibold mt-1"
            >
              Apply Filter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

