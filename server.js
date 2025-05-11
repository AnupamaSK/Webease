const express = require('express');
const cors = require('cors');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

// Middleware
app.use(cors());

// ✅ Increase payload size limits to avoid PayloadTooLargeError
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ (Optional) To serve uploaded files like photos
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', dataRoutes);

// Start the server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});

