const { Exam_type } = require("../../models");

exports.createExamType = async (req, res) => {
	try {
		const { name } = req.body;
		const newExamType = await Exam_type.create({ name, is_active: true });
		res.status(201).json({
			status: "success",
			data: {
				newExamType,
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
