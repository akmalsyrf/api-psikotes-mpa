const { ExamHasQuestion } = require("../models");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
	try {
		for (let i = 451; i <= 500; i++) {
			const exam_has_question = await ExamHasQuestion.create({ exam_id: req.body.exam_id, question_id: i });
		}
		res.status(200).json({
			status: "success created",
		});
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
