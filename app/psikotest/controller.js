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

exports.showPsikotest = async (req, res) => {
	try {
		const psikotest = await Psikotest.findOne({
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
	} catch (err) {
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};
