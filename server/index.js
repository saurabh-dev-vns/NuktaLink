require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db_config");
const urlRoutes = require('./routes/urlRoutes');
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// CORS options
const corsOptions = {
  origin: "https://nukta-link.vercel.app",
  credentials: true
};

// Use CORS middleware
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(express.json());

// Connect to the database
connectDB()

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
