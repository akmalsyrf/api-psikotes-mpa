const express = require("express");
const router = express.Router();

const { getListExam } = require("./controller");

router.get("/psikotest/exam", getListExam);

module.exports = router;
