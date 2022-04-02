const { Question, Answer } = require("../../models");

exports.getAllQuestions = async (req, res) => {
	try {
		const question = await Question.findAll();
		res.status(200).json({
			status: "Success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "Failed",
			message: "Server error",
		});
	}
};

exports.getQuestionById = async (req, res) => {
	try {
		const question = await Question.findOne({
			where: {
				id: req.params.id,
			},
			include: { model: Answer },
		});
		const answers = await Answer.findAll({
			where: {
				question_id: req.params.id,
			},
		});
		res.status(200).json({
			status: "Success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "Failed",
			message: "Server error",
		});
	}
};

exports.addQuestion = async (req, res) => {
	try {
		const question = await Question.create(req.body);
		res.status(201).json({
			status: "Success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "Failed",
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
			status: "Success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "Failed",
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
			status: "Success",
			data: { question },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "Failed",
			message: "Server error",
		});
	}
};
