require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db_config");
const urlRoutes = require('./routes/urlRoutes');
const cors = require('cors');
const app = express();

// Set allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === "production"
  ? ["https://nukta-link.vercel.app"]
  : ["http://localhost:5173"];

// CORS options
const corsOptions = {
  origin: allowedOrigins,
  credentials: true
};

// Use CORS middleware
app.use(cors(corsOptions));

// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to the database
connectDB()

// Log origin for CORS debugging
app.use((req, res, next) => {
  console.log('CORS Middleware - Origin:', req.headers.origin); // Log incoming origin
  next();
});

// Define API routes
app.use('/api', urlRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
