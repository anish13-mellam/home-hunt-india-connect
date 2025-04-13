
import mongoose from 'mongoose';

const MONGODB_URI = typeof process !== 'undefined' && process.env && process.env.MONGODB_URI 
  ? process.env.MONGODB_URI 
  : 'mongodb://localhost:27017/homehunt';

// Cached connection
let cachedConnection: typeof mongoose | null = null;

export const initDatabase = async () => {
  // If already connected, return the existing connection
  if (cachedConnection) {
    return { isConnected: true, mongoose: cachedConnection };
  }

  try {
    // Check if running in browser environment
    if (typeof window !== 'undefined') {
      return { 
        isConnected: false, 
        message: "Database connection not available in browser environment" 
      };
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions;

    // Connect to MongoDB
    const connection = await mongoose.connect(MONGODB_URI, options);

    // Cache the connection
    cachedConnection = connection;

    return { isConnected: true, mongoose: connection };
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    return { isConnected: false, error };
  }
};

export const closeDatabase = async () => {
  if (!cachedConnection) {
    return { isDisconnected: true, message: "No active connection to close" };
  }

  try {
    await mongoose.disconnect();
    cachedConnection = null;
    return { isDisconnected: true };
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    return { isDisconnected: false, error };
  }
};
