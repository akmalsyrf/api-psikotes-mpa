const express = require("express");
const router = express.Router();

const { getAllQuestions, getQuestionById, addQuestion, editQuestion, deleteQuestion } = require("./controller");

router.get("/questions", getAllQuestions);
router.get("/question/:id", getQuestionById);
router.post("/question", addQuestion);
router.put("/question/:id", editQuestion);
router.delete("/question/:id", deleteQuestion);

module.exports = router;
