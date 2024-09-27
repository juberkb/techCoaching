const express = require('express');
const mongoose = require('mongoose');
const inquiryRoutes = require('./routes/inquiryRoutes'); // Ensure this is the correct path
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));
// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Contact API!'); // Simple response for root route
});

app.use('/api/inquiries', inquiryRoutes); // Use your inquiry routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
