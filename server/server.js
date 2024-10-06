require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db_config");
const urlRoutes = require('./routes/urlRoutes');
const cors = require('cors');
const app = express();

//handle cors
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
}));

//server port
const PORT = process.env.PORT || 5050;

// Middleware to parse JSON
app.use(express.json());

//connect to database
connectDB();

// Use the URL routes
app.use('/', urlRoutes);

// Start the server
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port : ${PORT}`);
})
