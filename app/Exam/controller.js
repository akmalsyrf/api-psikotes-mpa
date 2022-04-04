const { ExamHasQuestion, Question, Psikotest, Access_code, Exam } = require("../../models");
const axios = require("axios");

exports.getAllExams = async (req, res) => {
	try {
		const exams = await Exam.findAll({
			limit: req.query.limit !== undefined ? Number(req.query.limit) : 50,
			offset: req.query.offset !== undefined ? Number(req.query.offset) : 0,
			// order: [["createdAt", "DESC"]],
		});
		res.status(200).json({
			status: "success",
			data: {
				exams,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.getListExam = async (req, res) => {
	try {
		//check params
		if (req.query.access_code && req.query.test_code && req.query.user_id) {
			const { access_code, test_code, user_id } = req.query;

			//check existence test_code and access_code
			const psikotest = await Psikotest.findOne({
				where: {
					test_code: test_code,
				},
				include: {
					model: Access_code,
					where: {
						access_code: access_code,
					},
				},
			});
			if (psikotest !== null) {
				const exam = await Exam.findAll({
					order: [["createdAt", "DESC"]],
				});

				res.status(200).json({
					status: "success",
					data: {
						idExam: exam.map((item) => {
							return item.id;
						}),
					},
				});
			} else {
				res.status(403).json({
					status: "failed",
					message: "access_code or test_code isn't valid",
				});
			}
		} else {
			res.status(403).json({
				status: "failed",
				message: "You must provide access_code, test_code, and user_id",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.showExam = async (req, res) => {
	try {
		const exam_has_question = await ExamHasQuestion.findAll({
			where: {
				exam_id: req.params.id,
			},
			include: {
				model: Question,
			},
		});

		res.status(200).json({
			status: "success",
			data: {
				questions: exam_has_question.map((item) => {
					return item.Question;
				}),
			},
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.addExam = async (req, res) => {
	try {
		const { name, exam_code, exam_type_id, question_qty, total_duration, tag, open, close } = req.body;
		const exam = await Exam.create({ name, exam_code, exam_type_id, question_qty, total_duration, tag, open, close });
		res.status(200).json({
			status: "success",
			data: {
				exam,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.updateExam = async (req, res) => {
	try {
		const exam = await Exam.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: {
				exam,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.deleteExam = async (req, res) => {
	try {
		const exam = await Exam.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: {
				exam,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.coba = async (req, res) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
		res.status(200).json({
			status: "success",
			data: response.data,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};
