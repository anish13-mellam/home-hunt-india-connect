
import express from 'express';
import cors from 'cors';
import { initDatabase } from './lib/db';
import propertyRoutes from './api/property-routes';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database connection
initDatabase()
  .then((result) => {
    if (result.isConnected) {
      console.log("MongoDB connected successfully!");
    } else {
      console.error("MongoDB connection failed:", result.error);
      process.exit(1);
    }
  });

// API routes
app.use('/api', propertyRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Home Hunt India API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
