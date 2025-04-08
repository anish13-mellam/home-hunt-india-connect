
import mongoose from 'mongoose';

export interface DbConfig {
  uri: string;
  dbName: string;
}

export const dbConfig: DbConfig = {
  uri: process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.mongodb.net",
  dbName: "homehunt_india"
};

export const connectToDatabase = async () => {
  try {
    console.log("Connecting to MongoDB database...");
    
    if (!mongoose.connection.readyState) {
      await mongoose.connect(dbConfig.uri, {
        dbName: dbConfig.dbName
      });
    }
    
    console.log("Connected to MongoDB database successfully");
    return {
      isConnected: true,
      mongoose
    };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    return {
      isConnected: false,
      error
    };
  }
};

export const collections = {
  properties: "properties",
  users: "users",
  messages: "messages",
  agents: "agents"
};

// Mongoose schemas
const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true, enum: ['apartment', 'house', 'villa', 'plot'] },
  price: { type: Number, required: true },
  priceUnit: { type: String, required: true, enum: ['lakh', 'crore'] },
  location: { type: String, required: true },
  area: { type: Number, required: true },
  beds: { type: Number },
  baths: { type: Number },
  image: { type: String, required: true },
  forRent: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  description: { type: String },
  amenities: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Create and export models if they don't exist
export const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema, collections.properties);

// Initialize database connection
export const initDatabase = async () => {
  return await connectToDatabase();
};
