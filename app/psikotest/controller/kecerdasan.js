const axios = require("axios");
const { Psikotest, Intelligence_answer, Intelligence_grade, Access_code, Question, Option, Answer } = require("../../../models");

exports.intelligenceTest = async (req, res) => {
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
						user_id: req.query.user,
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

					//store data intelligence answer and intelligence grade in last looping data
					if (i === data.length - 1) {
						//store intelligence answer
						let correct_qty = qty;
						let wrong_qty = data.length - correct_qty;
						let unanswered_qty = qty_question - data.length;
						let total_question = qty_question;
						await Intelligence_answer.create({ user_id, psikotest_id: psikotest.id, correct_qty, wrong_qty, unanswered_qty, total_question });

						//intelligence grade
						let grade = correct_qty;
						let gradeOneHundred = (correct_qty / total_question) * 100;
						await Intelligence_grade.create({ user_id, psikotest_id: psikotest.id, grade, gradeOneHundred });

						res.status(200).json({
							status: "success",
							message: "Intelligence test success",
							data: {
								gradeOneHundred,
								correct_qty,
								wrong_qty,
								unanswered_qty,
								total_question,
							},
						});
					}
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
