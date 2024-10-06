require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db_config");
const urlRoutes = require('./routes/urlRoutes');
const cors = require('cors');
const app = express();

const origin = process.env.ORIGIN;

//handle cors
const corsOptions = {
    origin: origin,
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions));

//server port
const PORT = process.env.PORT || 5050;

// Middleware to parse JSON
app.use(express.json());

//connect to database
connectDB();

//send hello world
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// Use the URL routes
app.use('/', urlRoutes);

// Start the server
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port : ${PORT}`);
})
