const axios = require("axios");
const { Psikotest, Speed_prex_grade, Accuracy_prex_grade, Endurance_prex_grade, Access_code, Accumulation_speed, Accumulation_accuracy, Accumulation_endurance, Question, Option, Answer, Student_answer } = require("../../models");

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

				data.forEach(async (item, i) => {
					const exam_id = item.exam_id;

					//get qty of question
					const url = `${process.env.SERVER_URL}/exam/${Number(exam_id)}`;
					const getQuestionInExam = await axios.get(url);
					const qty_question = getQuestionInExam.data.data.questions.length;

					if (i === data.length - 1) {
						await Speed_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty, qty_question });
					}
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
				await data.forEach(async (item, i) => {
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
						include: [{ model: Option }, { model: Answer }],
					});
					const options = JSON.parse(JSON.stringify(question.Options));
					const answer = JSON.parse(JSON.stringify(question.Answer));

					//check answer
					if (options[item.answer].id === Number(answer.option_id)) {
						qty += 1;
					}

					//store data student answer
					await Student_answer.create({ user_id, exam_id: Number(exam_id), question_id: item.question_id, option_id: Number(item.answer) });

					//store data accuracy test in last looping data
					if (i === data.length - 1) {
						await Accuracy_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty, qty_question });
					}
				});
				res.status(200).json({
					status: "success",
					message: "Accuracy test success",
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

exports.accuracyTestAccumulation = async (req, res) => {
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

				const accuracyTest = await Accuracy_prex_grade.findAll({
					where: {
						user_id: user_id,
						psikotest_id: psikotest_id,
					},
				});

				let qty = [];
				let qty_question = [];
				await accuracyTest.forEach((item) => {
					qty.push(item.qty);
					qty_question.push(item.qty_question);
				});
				qty = qty.reduce((a, b) => a + b, 0);
				qty_question = qty_question.reduce((a, b) => a + b, 0);

				const accumulation_accuracy = await Accumulation_accuracy.create({ user_id, psikotest_id, qty, qty_question });
				res.status(200).json({
					status: "success",
					data: {
						accumulation_accuracy,
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

exports.enduranceTest = async (req, res) => {
	try {
		if (req.body.test_code && req.body.access_code) {
			const { test_code, access_code } = req.body;

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
				const psikotest_id = psikotest.id;
				const accuracyTest = await Accuracy_prex_grade.findAll({
					order: [["id", "ASC"]],
					where: {
						user_id,
						psikotest_id,
					},
				});

				let from_exam_id;
				let to_exam_id;
				let percentage_progress;
				let difference_qty;

				for (let i = 1; i < accuracyTest.length; i++) {
					from_exam_id = accuracyTest[i - 1].exam_id;
					to_exam_id = accuracyTest[i].exam_id;
					difference_qty = accuracyTest[i].qty - accuracyTest[i - 1].qty;
					percentage_progress = (difference_qty / accuracyTest[i - 1].qty) * 100;

					if (i >= 1) {
						await Endurance_prex_grade.create({ user_id, psikotest_id, from_exam_id, to_exam_id, percentage_progress, difference_qty });
					}
				}

				res.status(200).json({
					status: "success",
					message: "Endurance test success",
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

exports.enduranceTestAccumulation = async (req, res) => {
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

				let enduranceTest = await Endurance_prex_grade.findAll({
					order: [["id", "ASC"]],
					where: {
						user_id: Number(user_id),
						psikotest_id,
					},
				});

				let percentage_progress = [];
				await enduranceTest.forEach((item) => {
					percentage_progress.push(item.percentage_progress);
				});

				let average_percentage_progress = percentage_progress.reduce((a, b) => a + b, 0);
				average_percentage_progress = average_percentage_progress / percentage_progress.length;

				const accumulation_endurance = await Accumulation_endurance.create({ user_id, psikotest_id, percentage_progress: average_percentage_progress });

				res.status(200).json({
					status: "success",
					data: {
						accumulation_endurance,
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

exports.sendAnswerPsikotest = async (req, res) => {
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
				const qty_kecepatan = data.length;
				let qty_ketepatan = 0;
				let qty_question;

				data.forEach(async (item, i) => {
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
						include: [{ model: Option }, { model: Answer }],
					});
					const options = JSON.parse(JSON.stringify(question.Options));
					const answer = JSON.parse(JSON.stringify(question.Answer));

					//check answer
					if (options[item.answer].id === Number(answer.option_id)) {
						qty_ketepatan += 1;
					}

					//store data student answer
					await Student_answer.create({ user_id, exam_id: Number(exam_id), question_id: item.question_id, option_id: Number(item.answer) });

					// const student_answer = await Student_answer.findOne({
					// 	where: {
					// 		option_id: Number(item.answer),
					// 		question_id: item.question_id,
					// 	},
					// });

					// if(student_answer !== null){
					// 	qty_ketepatan += 1;
					// }

					//store data accuracy and speed
					if (i === data.length - 1) {
						await Speed_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty: qty_kecepatan, qty_question });
						await Accuracy_prex_grade.create({ user_id, psikotest_id: psikotest.id, exam_id: Number(exam_id), qty: qty_ketepatan, qty_question });
					}
				});
				res.status(200).json({
					status: "success",
					message: "send answer psikotest success",
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
