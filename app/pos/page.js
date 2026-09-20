'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Printer,
  CheckCircle2,
  AlertCircle,
  Package,
  Layers,
  Phone,
  User,
  RotateCcw,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

export default function POSPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({ name: '', phone: '' });
  const [discount, setDiscount] = useState('');
  const [due, setDue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Completed sale state for modal/toast
  const [completedSale, setCompletedSale] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/categories'),
      ]);

      if (!prodRes.ok) throw new Error('Failed to load products');
      if (!catRes.ok) throw new Error('Failed to load categories');

      const [prodData, catData] = await Promise.all([prodRes.json(), catRes.json()]);
      setProducts(prodData);
      setCategories(catData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku?.toLowerCase().includes(q) ||
        p.category?.name?.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'all' ||
        (p.category?._id || p.category) === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [products, search, selectedCategory]);

  const addToCart = (product) => {
    if (product.stockQuantity <= 0) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product === product._id);
      if (existing) {
        if (existing.quantity >= product.stockQuantity) return prevCart;
        return prevCart.map((item) =>
          item.product === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.unitPrice,
              }
            : item
        );
      } else {
        const unitPrice = Number(product.sellingPrice || product.price);
        return [
          ...prevCart,
          {
            product: product._id,
            name: product.name,
            sku: product.sku,
            unitPrice,
            quantity: 1,
            total: unitPrice,
            stockQuantity: product.stockQuantity,
          },
        ];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product === productId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            if (newQty > item.stockQuantity) return item;
            return {
              ...item,
              quantity: newQty,
              total: newQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((i) => i.product !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setCustomer({ name: '', phone: '' });
    setDiscount('');
    setDue('');
  };

  // Calculations
  const subTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  }, [cart]);

  const finalTotal = useMemo(() => {
    const disc = parseFloat(discount) || 0;
    return Math.max(0, subTotal - disc);
  }, [subTotal, discount]);

  const handleCompleteSale = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setError('Cart is empty. Please select products to complete a sale.');
      return;
    }

    setSubmitting(true);
    setError('');

    const payload = {
      customerName: customer.name || 'Walk-in Customer',
      customerPhone: customer.phone || 'N/A',
      items: cart.map((i) => ({
        product: i.product,
        name: i.name,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
        total: i.total,
      })),
      subTotal,
      discount: parseFloat(discount) || 0,
      finalTotal,
      due: parseFloat(due) || 0,
    };

    try {
      const res = await fetch('/api/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to complete sale');
      }

      const sale = await res.json();
      setCompletedSale(sale);
      clearCart();
      loadData(); // refresh product stock
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 max-w-[1600px] mx-auto">
      {/* Top Notification / Error Alert */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* POS Main Grid Layout (70% Left: Catalog, 30% Right: Sticky Cart) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
        {/* LEFT SECTION: 70% Product Catalog */}
        <div className="lg:col-span-7 space-y-4">
          {/* Search & Category Filter Chips */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search parts by name, SKU (e.g. BP-TOY-001), or category..."
                className="pl-10 h-10 text-sm bg-slate-50 focus:bg-white"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Categories ({products.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  type="button"
                  onClick={() => setSelectedCategory(cat._id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat._id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="min-h-[520px]">
            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-slate-700" />
                Loading auto parts inventory...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-400">
                <Package className="w-10 h-10 text-slate-300 mb-2" />
                <p className="text-sm font-semibold text-slate-700">No matching parts found</p>
                <p className="text-xs text-slate-400 mt-0.5">Try searching with a different term or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredProducts.map((p) => {
                  const isOutOfStock = p.stockQuantity <= 0;
                  const inCartItem = cart.find((i) => i.product === p._id);
                  const isMaxInCart = inCartItem && inCartItem.quantity >= p.stockQuantity;

                  return (
                    <button
                      key={p._id}
                      type="button"
                      disabled={isOutOfStock || isMaxInCart}
                      onClick={() => addToCart(p)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between group relative ${
                        isOutOfStock || isMaxInCart
                          ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50'
                          : 'bg-white border-slate-200 hover:border-slate-900 hover:shadow-md cursor-pointer'
                      }`}
                    >
                      {inCartItem && (
                        <span className="absolute top-2 right-2 w-5 h-5 bg-slate-900 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                          {inCartItem.quantity}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase bg-slate-100 px-1.5 py-0.5 rounded">
                            {p.sku}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate">
                            {p.category?.name}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-slate-950">
                          {p.name}
                        </h3>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-end justify-between">
                        <div>
                          <span className="text-xs text-slate-400 block text-[10px] leading-none">Price</span>
                          <span className="text-sm font-extrabold text-slate-900">
                            ৳{Number(p.sellingPrice || p.price).toFixed(2)}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                            isOutOfStock
                              ? 'bg-red-50 text-red-600'
                              : p.stockQuantity <= (p.minStockAlert || 5)
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}
                        >
                          {isOutOfStock ? '0 stock' : `Stock: ${p.stockQuantity}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SECTION: 30% Sticky Cart & Checkout */}
        <div className="lg:col-span-3 sticky top-20 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Cart Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-slate-900" />
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Sale Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
                </h2>
              </div>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Cart Items List */}
            <div className="p-3 divide-y divide-slate-100 max-h-64 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 flex flex-col items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-slate-300 mb-1.5 stroke-[1.5]" />
                  <span>Cart is empty</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Click parts to add them to invoice</span>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product} className="py-2.5 flex items-center justify-between gap-2 text-xs">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 truncate">{item.name}</p>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                        <span className="font-mono">{item.sku}</span>
                        <span>•</span>
                        <span>৳{item.unitPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product, -1)}
                        className="w-5 h-5 rounded flex items-center justify-center hover:bg-white text-slate-700 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product, 1)}
                        disabled={item.quantity >= item.stockQuantity}
                        className="w-5 h-5 rounded flex items-center justify-center hover:bg-white text-slate-700 disabled:opacity-30 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="w-16 text-right">
                      <p className="font-bold text-slate-900">৳{item.total.toFixed(2)}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product)}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Customer Information Form */}
            <div className="p-3.5 border-t border-slate-100 bg-slate-50/50 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <User className="w-3.5 h-3.5 text-slate-500" /> Customer Information
              </div>
              <Input
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                placeholder="Customer Name (Default: Walk-in)"
                className="h-8 text-xs bg-white"
              />
              <Input
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                placeholder="Phone Number (e.g. 017XXXXXXXX)"
                className="h-8 text-xs bg-white"
              />
            </div>

            {/* Calculation & Complete Sale */}
            <div className="p-4 border-t border-slate-200 bg-white space-y-2.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-900">৳{subTotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Discount (৳):</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="0.00"
                  className="w-20 text-right px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white font-medium"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Due Amount (৳):</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={due}
                  onChange={(e) => setDue(e.target.value)}
                  placeholder="0.00"
                  className="w-20 text-right px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white font-medium"
                />
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Final Total:</span>
                <span>৳{finalTotal.toFixed(2)}</span>
              </div>

              <Button
                type="button"
                onClick={handleCompleteSale}
                disabled={submitting || cart.length === 0}
                className="w-full h-11 text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md transition-all mt-2"
              >
                {submitting ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Completing Sale...
                  </div>
                ) : (
                  'Complete Sale & Invoice'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Sale Success Modal / Toast Dialog */}
      <Dialog open={!!completedSale} onOpenChange={() => setCompletedSale(null)}>
        <DialogHeader>
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <DialogTitle className="text-center">Sale Completed Successfully!</DialogTitle>
          <DialogDescription className="text-center">
            Invoice <span className="font-mono font-bold text-slate-800">#{completedSale?.invoiceNumber}</span> has been generated and stock deducted.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 my-4 space-y-2 text-xs">
          <div className="flex justify-between text-slate-600">
            <span>Customer:</span>
            <span className="font-semibold text-slate-900">{completedSale?.customerName}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Items Count:</span>
            <span className="font-semibold text-slate-900">{completedSale?.items?.length} items</span>
          </div>
          <div className="flex justify-between text-slate-600 font-bold border-t border-slate-200 pt-2 text-sm text-slate-900">
            <span>Total Paid:</span>
            <span className="text-emerald-700 font-extrabold">৳{Number(completedSale?.finalTotal).toFixed(2)}</span>
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCompletedSale(null)}
          >
            New Sale
          </Button>

          <Link
            href={`/invoices/${completedSale?._id}`}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-all shadow-sm"
          >
            <Printer className="w-4 h-4" /> Print Invoice
          </Link>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
