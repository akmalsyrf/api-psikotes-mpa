const { Category_test, Psikotest } = require("../../models");

exports.createCategoryTest = async (req, res) => {
	try {
		const { name } = req.body;
		const categoryTest = await Category_test.create({
			name,
			is_active: true,
		});
		res.status(201).json({
			status: "success",
			data: {
				categoryTest,
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
