const { Psikotest } = require("../../models");

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
