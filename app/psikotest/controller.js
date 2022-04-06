const axios = require("axios");
const { Psikotest, Speed_prex_grade, Accuracy_prex_grade, Access_code, Accumulation_speed, Exam, Question, Option, Answer, Student_answer } = require("../../models");

exports.getAllPsikotest = async (req, res) => {
	try {
		const psikotest = await Psikotest.findAll({
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json({
			status: "success",
			data: {
				psikotest,
			},
		});
	} catch (err) {
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.speedTest = async (req, res) => {
	try {
		if (req.body.test_code && req.body.access_code) {
			const { test_code, access_code, data } = req.body;

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
				const qty = data.length;
				const user_id = Number(req.query.user);

				data.forEach(async (item) => {
					const exam_id = item.exam_id;

					//get qty of question
					const url = `${process.env.SERVER_URL}/exam/${Number(exam_id)}`;
					const getQuestionInExam = await axios.get(url);
					const qty_question = getQuestionInExam.data.data.questions.length;

					await Speed_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty, qty_question });
				});
				res.status(200).json({
					status: "success",
					message: "Speed test success",
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
				message: "You must provide a test_code, user_id and access_code",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.speedTestAccumulation = async (req, res) => {
	try {
		if (req.body.test_code && req.body.access_code && req.body.user_id) {
			const { test_code, access_code, user_id } = req.body;

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
				const psikotest_id = psikotest.id;

				const speedTest = await Speed_prex_grade.findAll({
					where: {
						user_id: user_id,
						psikotest_id: psikotest_id,
					},
				});

				let qty = [];
				let qty_question = [];
				await speedTest.forEach((item) => {
					qty.push(item.qty);
					qty_question.push(item.qty_question);
				});
				qty = qty.reduce((a, b) => a + b, 0);
				qty_question = qty_question.reduce((a, b) => a + b, 0);

				const accumulation_speed = await Accumulation_speed.create({ user_id, psikotest_id, qty, qty_question });
				res.status(200).json({
					status: "success",
					data: {
						accumulation_speed,
					},
				});
			}
		} else {
			res.status(403).json({
				status: "failed",
				message: "You must provide a test_code, user_id and access_code",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.accuracyTest = async (req, res) => {
	try {
		if (req.body.test_code && req.body.access_code) {
			const { test_code, access_code, data } = req.body;

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
				const user_id = Number(req.query.user);

				let qty = 0;
				let qty_question;
				data.forEach(async (item) => {
					const exam_id = item.exam_id;

					//get qty of question
					const url = `${process.env.SERVER_URL}/exam/${Number(exam_id)}`;
					const getQuestionInExam = await axios.get(url);
					qty_question = getQuestionInExam.data.data.questions.length;

					//a,c,d,e = 0,1,2,3,4
					const question = await Question.findOne({
						where: {
							id: item.question_id,
						},
						include: [
							{
								model: Option,
							},
							{
								model: Answer,
							},
						],
					});
					const options = JSON.parse(JSON.stringify(question.Options));
					const answer = JSON.parse(JSON.stringify(question.Answer));

					if (options[item.answer].id === Number(answer.option_id)) {
						qty++;
					}
					await Student_answer.create({ user_id, exam_id: Number(exam_id), question_id: item.question_id, option_id: Number(item.answer), qty_question });
				});
				// await Accuracy_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty, qty_question });
				res.status(200).json({
					status: "success",
					message: "Accuracy test success",
					// data: {
					// 	qty,
					// 	qty_question,
					// 	psikotest_id: psikotest.id,
					// 	exam_id: Number(exam_id),
					// 	user_id,
					// },
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
				message: "You must provide a test_code, user_id and access_code",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.addPsikotest = async (req, res) => {
	try {
		const { name, category_test_id, test_code, open, close, quota, description, instruction } = req.body;
		const psikotest = await Psikotest.create({ name, category_test_id, test_code, open, close, quota, description, instruction });
		res.status(200).json({
			status: "success",
			data: {
				psikotest,
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

exports.editPsikotest = async (req, res) => {
	try {
		const psikotest = await Psikotest.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: {
				psikotest,
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
