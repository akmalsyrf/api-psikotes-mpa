const { Exam, Access_code } = require("../../models");

exports.getListExam = async (req, res) => {
	try {
		if (req.query.access_code && req.query.test_code && req.query.id_exam) {
			const { access_code, test_code, id_exam } = req.query;
			const exam = await Exam.findOne({
				where: {
					id: id_exam,
				},
			});
			res.status(200).json({
				status: "success",
				data: {
					exam,
				},
			});
		} else {
			res.status(200).json({
				status: "failed",
				message: "You must provide access_code, test_code, id_exam",
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
