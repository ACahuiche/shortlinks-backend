const express = require("express");
const router = express.Router();

const shortlinksController = require("../controllers/shortlinksController");

router.get("/:shortlink", shortlinksController.getShortlink);
router.post("/saveUrl", shortlinksController.saveUrl);

module.exports = router;
