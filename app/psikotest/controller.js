const { Character_personalities, Measurement } = require("../../models");

exports.getAllPersonalities = async (req, res) => {
	try {
		const personalities = await Character_personalities.findAll();
		res.status(200).json({
			status: "success",
			data: { personalities },
		});
	} catch (error) {
		res.status(500).json({
			status: "failed",
			message: "Server Error",
		});
	}
};

exports.detailPersonality = async (req, res) => {
	try {
		const personalities = await Character_personalities.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Measurement,
					as: "measurements",
				},
			],
		});
		res.status(200).json({
			status: "success",
			data: { personalities },
		});
	} catch (error) {
		res.status(500).json({
			status: "failed",
			message: "Server Error",
		});
	}
};
