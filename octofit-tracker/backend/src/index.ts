import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Basic Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() });
});

app.get('/api/workouts', (req, res) => {
  res.json({ 
    message: 'Workouts endpoint',
    data: []
  });
});

app.get('/api/stats', (req, res) => {
  res.json({ 
    message: 'Stats endpoint',
    data: {}
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 OctoFit Tracker Backend running on http://localhost:${PORT}`);
  console.log(`📊 MongoDB connected to ${MONGODB_URI}`);
});
