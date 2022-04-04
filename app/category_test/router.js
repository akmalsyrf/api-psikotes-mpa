const express = require("express");
const router = express.Router();

const { createCategoryTest } = require("./controller");
router.post("/categoryTest", createCategoryTest);

module.exports = router;
