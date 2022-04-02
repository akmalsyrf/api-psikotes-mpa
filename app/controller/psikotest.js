const Psikotest = require("../../models/psikotest");

module.exports = {
	getAllPsikotest: async (req, res) => {
		try {
			const psikotest = await Psikotest.findAll();
			res.status(200).json({
				status: "success",
				message: "Successfully get all psikotest",
				data: psikotest,
			});
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},
};
