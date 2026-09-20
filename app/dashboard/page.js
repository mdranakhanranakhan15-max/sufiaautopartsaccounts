'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  DollarSign,
  ShoppingCart,
  Package,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Receipt,
  Plus,
  Loader2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function DashboardPage() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prodRes, salesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/sales'),
        ]);

        if (prodRes.ok) {
          const prodData = await prodRes.json();
          setProducts(prodData);
        }
        if (salesRes.ok) {
          const salesData = await salesRes.json();
          setSales(salesData);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalRevenue = sales.reduce((sum, s) => sum + (s.finalTotal || 0), 0);
  const totalSalesCount = sales.length;
  const totalProducts = products.length;
  const lowStockProducts = products.filter(
    (p) => p.stockQuantity <= (p.minStockAlert || 5)
  );

  const recentSales = sales.slice(0, 5);

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Sufia Auto Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time business performance, inventory health, and recent point-of-sale activities.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/pos">
            <Button className="gap-2 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
              <ShoppingCart className="w-4 h-4" /> Open POS Terminal
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" /> Add Part
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Revenue
            </CardTitle>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <DollarSign className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-900">
              ${totalRevenue.toFixed(2)}
              ৳{totalRevenue.toFixed(2)}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Accumulated sales
            </p>
          </CardContent>
        </Card>

        {/* Total Invoices */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Invoices Created
            </CardTitle>
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Receipt className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-900">
              {totalSalesCount}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              Total completed transactions
            </p>
          </CardContent>
        </Card>

        {/* Parts in Catalog */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Inventory Catalog
            </CardTitle>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <Package className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-slate-900">
              {totalProducts}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              Active auto part SKUs
            </p>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card className={lowStockProducts.length > 0 ? 'border-amber-200 bg-amber-50/30' : ''}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Low Stock Alerts
            </CardTitle>
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-black ${lowStockProducts.length > 0 ? 'text-amber-700' : 'text-slate-900'}`}>
              {lowStockProducts.length}
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              Parts below alert threshold
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Section: Recent Transactions & Low Stock Warning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Invoices (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Recent Sales Invoices</h2>
              <p className="text-xs text-slate-500 mt-0.5">Latest transactions processed at the checkout</p>
            </div>
            <Link
              href="/invoices"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-slate-400">
                    <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                  </TableCell>
                </TableRow>
              ) : recentSales.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-slate-400 text-xs">
                    No sales recorded yet. Start in POS terminal.
                  </TableCell>
                </TableRow>
              ) : (
                recentSales.map((sale) => (
                  <TableRow key={sale._id}>
                    <TableCell className="font-mono text-xs font-bold text-slate-900">
                      <Link href={`/invoices/${sale._id}`} className="hover:underline">
                        {sale.invoiceNumber || `#${sale._id.slice(-6)}`}
                      </Link>
                    </TableCell>
                    <TableCell className="text-xs text-slate-700">
                      {sale.customerName || 'Walk-in'}
                    </TableCell>
                    <TableCell className="text-right font-extrabold text-xs text-slate-900">
                      ${Number(sale.finalTotal).toFixed(2)}
                      ৳{Number(sale.finalTotal).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right text-xs text-slate-500">
                      {new Date(sale.date || sale.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Low Stock Watchlist (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Low Stock Watchlist</h2>
              <p className="text-xs text-slate-500 mt-0.5">Parts requiring purchase orders</p>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              Inventory <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
            {loading ? (
              <div className="py-8 text-center text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin mx-auto" />
              </div>
            ) : lowStockProducts.length === 0 ? (
              <div className="py-8 text-center text-xs text-emerald-600 bg-emerald-50/50 rounded-xl p-4">
                All auto parts inventory levels are healthy!
              </div>
            ) : (
              lowStockProducts.map((p) => (
                <div key={p._id} className="py-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{p.name}</p>
                    <p className="font-mono text-[10px] text-slate-400">SKU: {p.sku}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block font-extrabold px-2 py-0.5 rounded text-xs ${
                        p.stockQuantity <= 0
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {p.stockQuantity <= 0 ? 'Out of stock' : `${p.stockQuantity} remaining`}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
