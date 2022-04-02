const { Psikotest } = require("../../models");

exports.getAllPsikotest = async (req, res) => {
	try {
		const psikotest = await Psikotest.findAll();
		res.status(200).json({
			status: "success",
			data: {
				psikotest,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};
