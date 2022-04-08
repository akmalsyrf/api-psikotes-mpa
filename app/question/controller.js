const { Question, Answer, Option } = require("../../models");

exports.getAllQuestions = async (req, res) => {
	try {
		const question = await Question.findAll({
			limit: req.query.limit !== undefined ? Number(req.query.limit) : 50,
			offset: req.query.offset !== undefined ? Number(req.query.offset) : 0,
			// order: [["createdAt", "DESC"]],
		});
		res.status(200).json({
			status: "success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.showQuestion = async (req, res) => {
	try {
		const question = await Question.findOne({
			where: {
				id: req.params.id,
			},
			include: [{ model: Answer }, { model: Option }],
		});
		res.status(200).json({
			status: "success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.addQuestion = async (req, res) => {
	try {
		const { title, question_code, question, category_id, tag, duration, edition } = req.body;
		const questionData = await Question.create({ title, question_code, question, category_id, tag, duration, edition });
		res.status(201).json({
			status: "success",
			data: { questionData },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.editQuestion = async (req, res) => {
	try {
		const question = await Question.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.deleteQuestion = async (req, res) => {
	try {
		const question = await Question.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};
