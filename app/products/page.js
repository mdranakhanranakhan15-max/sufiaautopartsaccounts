'use client';

import { useState, useEffect, useMemo } from 'react';
import { Plus, Package, Search, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    sku: '',
    category: '',
    buyingPrice: '',
    sellingPrice: '',
    stockQuantity: '',
    minStockAlert: 5,
  });

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

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to create product');
      }

      const newProd = await res.json();
      setProducts((prev) => [newProd, ...prev]);
      setForm({
        name: '',
        sku: '',
        category: '',
        buyingPrice: '',
        sellingPrice: '',
        stockQuantity: '',
        minStockAlert: 5,
      });
      setDialogOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase().trim());
      const matchesCat = selectedCategory ? (p.category?._id || p.category) === selectedCategory : true;
      return matchesSearch && matchesCat;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Products Catalog</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage auto parts stock, SKU numbers, buying & selling prices.
          </p>
        </div>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by part name or SKU..."
              className="pl-9"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-9 px-3 border border-slate-300 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <span className="text-xs text-slate-500 font-medium self-end sm:self-center">
          Showing {filteredProducts.length} of {products.length} products
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Part Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Buy Price</TableHead>
              <TableHead className="text-right">Sell Price</TableHead>
              <TableHead className="text-right">Stock Level</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-slate-500">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Loading products...
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-slate-500">
                  <Package className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  No products found. Add a product to get started.
                </TableCell>
              </TableRow>
            ) : (
              filteredProducts.map((prod) => {
                const isLowStock = prod.stockQuantity <= (prod.minStockAlert || 5);
                const isOutOfStock = prod.stockQuantity <= 0;

                return (
                  <TableRow key={prod._id}>
                    <TableCell className="font-semibold text-slate-900">
                      {prod.name}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-slate-600">
                      {prod.sku}
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                        {prod.category?.name || 'Uncategorized'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-xs text-slate-500">
                      ${Number(prod.buyingPrice || 0).toFixed(2)}
                      ৳{Number(prod.buyingPrice || 0).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-slate-900">
                      ${Number(prod.sellingPrice || prod.price).toFixed(2)}
                      ৳{Number(prod.sellingPrice || prod.price).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`font-bold ${
                          isOutOfStock
                            ? 'text-red-600'
                            : isLowStock
                            ? 'text-red-500'
                            : 'text-slate-800'
                        }`}
                      >
                        {prod.stockQuantity}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {isOutOfStock ? (
                        <Badge variant="destructive">Out of Stock</Badge>
                      ) : isLowStock ? (
                        <Badge variant="warning" className="gap-1">
                          <AlertTriangle className="w-3 h-3" /> Low Stock
                        </Badge>
                      ) : (
                        <Badge variant="success">Healthy</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add Product Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogClose onClose={() => setDialogOpen(false)} />
        <DialogHeader>
          <DialogTitle>Add New Auto Part</DialogTitle>
          <DialogDescription>
            Enter details to add a new product to Sufia Auto inventory.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="p-3 mb-4 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleCreateProduct} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Part Name *
            </label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Front Brake Pad Set (Toyota Corolla)"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                SKU (Part Number) *
              </label>
              <Input
                required
                value={form.sku}
                onChange={(e) => setForm({ ...form, sku: e.target.value.toUpperCase() })}
                placeholder="e.g. BP-TOY-001"
                className="uppercase font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category *
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full h-9 px-3 border border-slate-300 rounded-lg text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Buying Price ($) *
                Buying Price (৳) *
              </label>
              <Input
                type="number"
                step="0.01"
                min="0"
                required
                value={form.buyingPrice}
                onChange={(e) => setForm({ ...form, buyingPrice: e.target.value })}
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Selling Price ($) *
                Selling Price (৳) *
              </label>
              <Input
                type="number"
                step="0.01"
                min="0"
                required
                value={form.sellingPrice}
                onChange={(e) => setForm({ ...form, sellingPrice: e.target.value })}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Initial Stock Quantity *
              </label>
              <Input
                type="number"
                min="0"
                required
                value={form.stockQuantity}
                onChange={(e) => setForm({ ...form, stockQuantity: e.target.value })}
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Min Stock Alert Level
              </label>
              <Input
                type="number"
                min="0"
                value={form.minStockAlert}
                onChange={(e) => setForm({ ...form, minStockAlert: e.target.value })}
                placeholder="5"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Save Product'}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}

