'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Printer, ArrowLeft, Loader2, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InvoicePrintPage() {
  const params = useParams();
  const id = params?.id;

  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchSale = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/sales/${id}`);
        if (!res.ok) {
          throw new Error('Invoice not found');
        }
        const data = await res.json();
        setSale(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSale();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading invoice details...
        </div>
      </div>
    );
  }

  if (error || !sale) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 border border-red-200 rounded-xl text-center space-y-4 my-8">
        <p className="text-sm text-red-600 font-semibold">{error || 'Invoice not found.'}</p>
        <Link
          href="/invoices"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Invoices
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-2 sm:py-6 px-2 sm:px-6">
      {/* Top Action Bar (Hidden during printing) */}
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/invoices"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-slate-300 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Invoices
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/pos"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Go to POS
          </Link>
          <Button
            type="button"
            onClick={() => window.print()}
            className="gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm"
          >
            <Printer className="w-4 h-4" /> Print Invoice (A4/A5)
          </Button>
        </div>
      </div>

      {/* Printable Sheet (Standard A4 / A5 Ratio) */}
      <div className="bg-white border border-slate-200 shadow-lg rounded-xl p-8 sm:p-12 print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none text-slate-900">
        {/* Header Section */}
        <div className="flex items-start justify-between border-b-2 border-slate-900 pb-6">
          <div className="space-y-1 max-w-lg">
            {/* Shop Name - Large, Bold, Prominent */}
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
              Sufia Auto
            </h1>
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Auto Parts, Accessories & Mechanical Solutions
            </p>
            <p className="text-xs text-slate-600">
              Station Road, Auto Market, Bogura, Bangladesh
            </p>
            <p className="text-xs text-slate-600">
              Hotline: +880 1711-000000 | Email: sales@sufiaauto.com
            </p>
          </div>

          {/* Shop Logo Placeholder */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 bg-slate-50">
              <Wrench className="w-6 h-6 text-slate-400 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Logo</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1">Shop Logo</span>
          </div>
        </div>

        {/* Invoice Metadata & Customer Information */}
        <div className="grid grid-cols-2 gap-6 py-5 border-b border-slate-200 text-xs">
          <div>
            <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              Customer Information
            </span>
            <p className="text-sm font-extrabold text-slate-900">
              {sale.customerName || 'Walk-in Customer'}
            </p>
            <p className="text-slate-600 mt-0.5">
              Phone: <span className="font-semibold text-slate-800">{sale.customerPhone || 'N/A'}</span>
            </p>
            {sale.customerAddress && (
              <p className="text-slate-600 mt-0.5">Address: {sale.customerAddress}</p>
            )}
          </div>

          <div className="text-right space-y-1">
            <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              Invoice Summary
            </span>
            <p className="text-sm font-black text-slate-900">
              Invoice No: <span className="font-mono text-slate-800">#{sale.invoiceNumber || sale._id}</span>
            </p>
            <p className="text-slate-600">
              Date: <span className="font-medium text-slate-800">
                {new Date(sale.date || sale.createdAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </p>
            <p className="text-slate-600">
              Cashier: <span className="font-semibold text-slate-800">{sale.cashier?.name || 'Staff'}</span>
            </p>
          </div>
        </div>

        {/* Items Table */}
        <div className="my-6">
          <table className="w-full text-left border-collapse text-xs border border-slate-200">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider">
                <th className="py-2.5 px-3 w-12 text-center border-r border-slate-200">Sl</th>
                <th className="py-2.5 px-3 border-r border-slate-200">Item Description</th>
                <th className="py-2.5 px-3 text-center w-20 border-r border-slate-200">Qty</th>
                <th className="py-2.5 px-3 text-right w-28 border-r border-slate-200">Unit Price</th>
                <th className="py-2.5 px-3 text-right w-28">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sale.items?.map((item, index) => (
                <tr key={index} className="even:bg-slate-50/50">
                  <td className="py-2.5 px-3 text-center text-slate-500 font-mono border-r border-slate-200">
                    {index + 1}
                  </td>
                  <td className="py-2.5 px-3 font-semibold text-slate-900 border-r border-slate-200">
                    {item.name}
                    {item.product?.sku && (
                      <span className="block font-mono text-[10px] text-slate-500 font-normal">
                        SKU: {item.product.sku}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-center font-bold text-slate-800 border-r border-slate-200">
                    {item.quantity}
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-700 border-r border-slate-200">
                    ${Number(item.unitPrice).toFixed(2)}
                    ৳{Number(item.unitPrice).toFixed(2)}
                  </td>
                  <td className="py-2.5 px-3 text-right font-extrabold text-slate-900">
                    ${Number(item.total).toFixed(2)}
                    ৳{Number(item.total).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Total Calculations Breakdown */}
        <div className="flex justify-end pt-2">
          <div className="w-72 space-y-1.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal:</span>
              <span className="font-semibold text-slate-900">${Number(sale.subTotal).toFixed(2)}</span>
              <span className="font-semibold text-slate-900">৳{Number(sale.subTotal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Discount:</span>
              <span className="font-semibold text-slate-900">
                -${Number(sale.discount || 0).toFixed(2)}
                -৳{Number(sale.discount || 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm font-black text-slate-900 border-t border-slate-300 pt-2">
              <span>Final Total:</span>
              <span className="text-base font-black">${Number(sale.finalTotal).toFixed(2)}</span>
              <span className="text-base font-black">৳{Number(sale.finalTotal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xs border-t border-slate-200 pt-1.5">
              <span className="text-slate-600">Due Amount:</span>
              <span className={sale.due > 0 ? 'text-red-600 font-black' : 'text-slate-900'}>
                ${Number(sale.due || 0).toFixed(2)}
                ৳{Number(sale.due || 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Terms & Signatures Side-by-Side */}
        <div className="mt-20 pt-4 border-t border-slate-200 flex justify-between items-end text-center text-xs text-slate-600">
          <div className="w-48 text-center">
            <div className="border-t border-slate-900 pt-1.5 font-bold text-slate-900">
              Customer Signature
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-400 italic">
            Thank you for shopping at Sufia Auto!
          </div>

          <div className="w-48 text-center">
            <div className="border-t border-slate-900 pt-1.5 font-bold text-slate-900">
              Authorized Signature
            </div>
          </div>
        </div>
      </div>

      {/* Print Specific CSS */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          aside,
          header,
          nav,
          button,
          .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
          }
          @page {
            size: auto;
            margin: 10mm;
          }
        }
      `}</style>
    </div>
  );
}
