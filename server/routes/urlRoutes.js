const express = require("express");
const {createShortUrl,getShortUrl,redirectToOriginalUrl} = require("../controllers/urlControllers");
const router = express.Router();

router.post("/shorten",createShortUrl);
router.get("/get-urls",getShortUrl);
router.get("/:shortCode",redirectToOriginalUrl);

module.exports = router;