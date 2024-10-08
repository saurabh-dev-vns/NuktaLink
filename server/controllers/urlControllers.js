const URL = require("../models/urlModel");
const generateShortCode = require("../utils/shortIdGenerator");

const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required." });
  }

  const shortCode = generateShortCode(); // Generate short code

  //console.log('Generated short code:', shortCode, 'Type:', typeof shortCode); // Log to check type and value

  try {
    const newURL = new URL({ originalUrl, shortCode }); // Create a new URL instance
    await newURL.save(); // Save to the database
    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
      originalUrl,
    });
  } catch (error) {
    console.error("Error saving URL:", error);
    res
      .status(500)
      .json({ error: "Error creating short URL", details: error.message });
  }
};

const getShortUrl = async (req,res)=>{
 try {
  const shortURL = await URL.find();
  res.json(shortURL);
 } catch (error) {
  res.status(400).json({"msg":"Unable to find urls",error});
 }
}

module.exports = { createShortUrl,getShortUrl};
