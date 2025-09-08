
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const componentRoutes = require('./routes/Component'); // ✅ correct import
app.use('/components', componentRoutes);

// MongoDB connection
mongoose.connect("mongodb://10.0.100.242:27017/", )
.then(() => {
  console.log('✅ Connected to MongoDBkkkkkmmmm');


  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
