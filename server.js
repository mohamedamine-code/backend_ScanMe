
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins — safe for dev
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false // unless you need cookies/auth headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const componentRoutes = require('./routes/Component'); // ✅ correct import
app.use('/components', componentRoutes);


// MongoDB connection
// mongodb://10.0.100.242:27017/yoooo
mongoose.connect("mongodb://192.168.1.13:27017/ScanMe",)
.then(() => {
  console.log('✅ Connected to MongoDBkkkkkmmmm');
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));