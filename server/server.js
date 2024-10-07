//server.js

require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db_config");
const urlRoutes = require('./routes/urlRoutes');
const cors = require('cors');
const app = express();

const allowedOrigins = 
  process.env.NODE_ENV === "production" 
    ? ["https://nukta-link.vercel.app"]
    : ["http://localhost:5173"];

const corsOptions = {
    origin: "*",
    credentials: true,
    methods: "GET,PUT,POST,DELETE,OPTIONS",
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

app.use((req, res, next) => {
  console.log('CORS Middleware - Origin:', req.headers.origin);
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
