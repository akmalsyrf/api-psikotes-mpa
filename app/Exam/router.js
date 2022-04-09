const express = require("express");
const router = express.Router();

const { getAllExams, getListExam, showExam, addExam, updateExam, deleteExam } = require("./controller");

router.get("/exams", getAllExams);
router.get("/psikotes/kecermatan/exam", getListExam);
router.get("/exam/:id", showExam);
router.post("/exam", addExam);
router.put("/exam/:id", updateExam);
router.delete("/exam/:id", deleteExam);

module.exports = router;
