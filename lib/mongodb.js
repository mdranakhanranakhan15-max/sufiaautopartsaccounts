import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // These timeouts are what stop the login request from hanging forever:
    // by default mongoose retries server selection for 30s+ (and longer on Vercel
    // where the socket may never error), while the awaited connect() inside
    // authorize() would simply never settle, leaving the client spinning.
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000, // fail fast if the DB is unreachable/not whitelisted
      connectTimeoutMS: 8000,
      socketTimeoutMS: 20000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;
