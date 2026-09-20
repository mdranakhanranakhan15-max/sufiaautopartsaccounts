import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Sale from '@/models/Sale';
import User from '@/models/User';
import Product from '@/models/Product';
import Category from '@/models/Category';

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    // Ensure referenced models are registered
    const sale = await Sale.findById(id)
      .populate('cashier', 'name email role')
      .populate({
        path: 'items.product',
        select: 'name sku category',
        populate: {
          path: 'category',
          select: 'name',
        },
      });

    if (!sale) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    return NextResponse.json(sale, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
