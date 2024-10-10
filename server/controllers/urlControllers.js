const URL = require("../models/urlModel");
const generateShortCode = require("../utils/shortIdGenerator");

const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required." });
  }

  const shortCode = generateShortCode(); 
  try {
    const newURL = new URL({ originalUrl, shortCode }); 
    await newURL.save();
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

const getShortUrl = async (req, res) => {
  try {
    const shortURL = await URL.find();
    res.json(shortURL);
  } catch (error) {
    res.status(400).json({ msg: "Unable to find urls", error });
  }
};

const redirectToOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;
  try {
    const urlEntry = await URL.findOne({ shortCode });
    if (urlEntry) {
      return res.redirect(301, urlEntry.originalUrl);
    } else {
      return res.status(404).send("Short URL not found");
    }
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

module.exports = { createShortUrl, getShortUrl, redirectToOriginalUrl };
