import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import connectToDatabase from '@/lib/mongodb';
import Sale from '@/models/Sale';
import Product from '@/models/Product';
import User from '@/models/User';
import { authOptions } from '@/lib/auth';

export async function POST(request) {
  try {
    await connectToDatabase();
    const session = await getServerSession(authOptions);

    let cashierId = session?.user?.id;
    if (!cashierId) {
      // Fallback: pick the first available active user (e.g. admin)
      const defaultUser = await User.findOne({ isActive: true });
      if (defaultUser) {
        cashierId = defaultUser._id;
      } else {
        return NextResponse.json(
          { error: 'No active cashier account found to associate with this sale.' },
          { status: 401 }
        );
      }
    }

    const body = await request.json();
    const {
      customerName = 'Walk-in Customer',
      customerPhone = 'N/A',
      items,
      subTotal,
      discount = 0,
      finalTotal,
      due = 0,
    } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty. Sale must contain at least one item.' },
        { status: 400 }
      );
    }

    // Step 1: Check stock availability for all items
    for (const item of items) {
      const productId = item.product || item.productId;
      const product = await Product.findById(productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.name || productId}` },
          { status: 404 }
        );
      }

      if (product.stockQuantity < item.quantity) {
        return NextResponse.json(
          {
            error: `Insufficient stock for "${product.name}". Available: ${product.stockQuantity}, Requested: ${item.quantity}`,
          },
          { status: 400 }
        );
      }
    }

    // Step 2: Decrement stock safely
    for (const item of items) {
      const productId = item.product || item.productId;
      await Product.findByIdAndUpdate(productId, {
        $inc: { stockQuantity: -item.quantity },
      });
    }

    // Step 3: Generate sequential/unique invoice number
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const invoiceNumber = `INV-${dateStr}-${randomSuffix}`;

    // Step 4: Create Sale invoice
    const sale = await Sale.create({
      invoiceNumber,
      cashier: cashierId,
      customerName: customerName.trim() || 'Walk-in Customer',
      customerPhone: customerPhone.trim() || 'N/A',
      items: items.map((i) => ({
        product: i.product || i.productId,
        name: i.name,
        quantity: Number(i.quantity),
        unitPrice: Number(i.unitPrice),
        total: Number(i.total),
      })),
      subTotal: Number(subTotal),
      discount: Number(discount) || 0,
      finalTotal: Number(finalTotal),
      due: Number(due) || 0,
      date: new Date(),
    });

    const populatedSale = await Sale.findById(sale._id).populate('cashier', 'name email');

    return NextResponse.json(populatedSale, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const sales = await Sale.find({})
      .populate('cashier', 'name')
      .populate('items.product', 'sku')
      .sort({ date: -1 });

    return NextResponse.json(sales, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
