const express = require("express");
const { getResume } = require("../controllers/getResume");

const router = express.Router();

router.route("/download/resume").get(getResume);

module.exports = router;
