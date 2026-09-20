import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import Category from '@/models/Category';

export async function GET() {
  try {
    await connectToDatabase();
    // Ensure Category model is loaded for populate
    const products = await Product.find({})
      .populate('category', 'name')
      .sort({ createdAt: -1 });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const {
      name,
      sku,
      category,
      buyingPrice,
      sellingPrice,
      stockQuantity,
      minStockAlert = 5,
    } = body;

    if (!name || !sku || !category || buyingPrice === undefined || sellingPrice === undefined || stockQuantity === undefined) {
      return NextResponse.json(
        { error: 'Please provide all required product fields.' },
        { status: 400 }
      );
    }

    const existingSku = await Product.findOne({ sku: sku.toUpperCase().trim() });
    if (existingSku) {
      return NextResponse.json(
        { error: `Product with SKU "${sku.toUpperCase().trim()}" already exists.` },
        { status: 400 }
      );
    }

    const product = await Product.create({
      name: name.trim(),
      sku: sku.toUpperCase().trim(),
      category,
      buyingPrice: Number(buyingPrice),
      sellingPrice: Number(sellingPrice),
      stockQuantity: Number(stockQuantity),
      minStockAlert: Number(minStockAlert) || 5,
    });

    const populatedProduct = await Product.findById(product._id).populate('category', 'name');

    return NextResponse.json(populatedProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
