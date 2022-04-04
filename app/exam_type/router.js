const express = require("express");
const router = express.Router();

const { createExamType } = require("./controller");
router.post("/examType", createExamType);

module.exports = router;
