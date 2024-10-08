const express = require("express");
const {createShortUrl,getShortUrl} = require("../controllers/urlControllers");
const router = express.Router();

router.post("/shorten",createShortUrl);
router.get("/get-urls",getShortUrl)

module.exports = router;