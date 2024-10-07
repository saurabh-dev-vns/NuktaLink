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

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and credentials to be sent
  methods: "GET,PUT,POST,DELETE,OPTIONS",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  optionsSuccessStatus: 200, // For legacy browser support
};

// Use CORS middleware
app.use(cors(corsOptions));

// Allow pre-flight requests (OPTIONS)
app.options('*', cors(corsOptions)); // Pre-flight handling

// Parse incoming requests with JSON payloads
app.use(express.json());

// Connect to database
connectDB();

// Log origin for CORS debugging
app.use((req, res, next) => {
  console.log('CORS Middleware - Origin:', req.headers.origin);
  next();
});

// Define API routes
app.use('/api', urlRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
