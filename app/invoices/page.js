'use client';

import { useState, useEffect } from 'react';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Receipt, Printer, Eye, Loader2 } from 'lucide-react';
import { Search, Receipt, Printer, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function InvoicesPage() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '', label: '' });

  const fetchSales = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/sales');
      if (!res.ok) throw new Error('Failed to load invoices');
      const data = await res.json();
      setSales(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const filteredSales = sales.filter((s) => {
    const q = search.toLowerCase().trim();
    return (
      s.invoiceNumber?.toLowerCase().includes(q) ||
      s.customerName?.toLowerCase().includes(q) ||
      s.customerPhone?.toLowerCase().includes(q)
    );
  });
  const filteredSales = useMemo(() => {
    return sales.filter((s) => {
      // 1. Text search filter
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.invoiceNumber?.toLowerCase().includes(q) ||
        s.customerName?.toLowerCase().includes(q) ||
        s.customerPhone?.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // 2. Date filter
      if (dateRange.from || dateRange.to) {
        const saleDate = new Date(s.date || s.createdAt);
        if (dateRange.from) {
          const fromDate = new Date(`${dateRange.from}T00:00:00`);
          if (saleDate < fromDate) return false;
        }
        if (dateRange.to) {
          const toDate = new Date(`${dateRange.to}T23:59:59.999`);
          if (saleDate > toDate) return false;
        }
      }

      return true;
    });
  }, [sales, search, dateRange]);

  const totalFilteredAmount = useMemo(() => {
    return filteredSales.reduce((sum, s) => sum + (s.finalTotal || 0), 0);
  }, [filteredSales]);

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sales Invoices</h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse, review, and print receipts generated from Sufia Auto POS.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by invoice #, customer name, phone..."
            className="pl-9"
          />
      {/* Search Bar & Date Filter */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          {/* Text Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by invoice #, customer name, phone..."
              className="pl-9"
            />
          </div>

          {/* Date Picker / Date Range Filter */}
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Total Invoices: {sales.length}
        </span>

        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium self-end sm:self-center">
          <span>Invoices: {filteredSales.length}</span>
          <span>•</span>
          <span className="font-bold text-slate-900">
            Total: ৳{totalFilteredAmount.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Cashier</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
              <TableHead className="text-right">Due</TableHead>
              <TableHead className="text-right">Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center text-slate-500">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Loading invoices...
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredSales.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center text-slate-500">
                  <Receipt className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  No sales invoices recorded yet.
                  No sales invoices match the selected criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredSales.map((sale) => (
                <TableRow key={sale._id}>
                  <TableCell className="font-mono font-bold text-xs text-slate-900">
                    {sale.invoiceNumber || `#${sale._id.slice(-6)}`}
                  </TableCell>
                  <TableCell className="font-medium text-slate-900">
                    {sale.customerName || 'Walk-in'}
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 font-mono">
                    {sale.customerPhone || 'N/A'}
                  </TableCell>
                  <TableCell className="text-xs text-slate-600">
                    {sale.cashier?.name || 'Staff'}
                  </TableCell>
                  <TableCell className="text-right font-extrabold text-slate-900">
                    ${Number(sale.finalTotal).toFixed(2)}
                    ৳{Number(sale.finalTotal).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-xs text-red-600">
                    {sale.due > 0 ? `$${Number(sale.due).toFixed(2)}` : '$0.00'}
                    {sale.due > 0 ? `৳${Number(sale.due).toFixed(2)}` : '৳0.00'}
                  </TableCell>
                  <TableCell className="text-right text-xs text-slate-500">
                    {new Date(sale.date || sale.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </TableCell>
                  <TableCell className="text-center">
                    <Link
                      href={`/invoices/${sale._id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" /> Print
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
