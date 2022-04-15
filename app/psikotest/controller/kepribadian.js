const { Option, Measurement, Grade_kepribadian, Character_personalities, Character_answer } = require("../../../models");
const { Op } = require("sequelize");

exports.sendAnswerKepribadian = async (req, res) => {
	try {
		const { user_id, data } = req.body;

		let introvert_percentage = 50;
		let ekstrovert_percentage = 50;
		let realistik_percentage = 50;
		let visioner_percentage = 50;
		let emosional_percentage = 50;
		let rasional_percentage = 50;
		let improvisasi_percentage = 50;
		let perencana_percentage = 50;
		let tegas_percentage = 50;
		let waspada_percentage = 50;

		data.forEach(async (item, i) => {
			//store data character answer
			// await Character_answer.create({ user_id, question_id: item.question_id, option_id: item.answer });

			let options = await Option.findAll({
				where: {
					question_id: item.id_question,
				},
				include: [{ model: Measurement, as: "measurements" }],
			});
			options = JSON.parse(JSON.stringify(options));

			await options.forEach(async (op, i) => {
				// console.log(op.id);
				if (op.measurements.length > 0 && options[item.answer].id == op.id) {
					let measurement = JSON.parse(JSON.stringify(op.measurements[0]));
					// console.log(measurement);

					function optionChecker(meas1, meas2, param1, param2) {
						const calculateMeas1 = () => {
							param1 += 4;
							param2 -= 4;
						};

						const calculateMeas2 = () => {
							param1 -= 4;
							param2 += 4;
						};

						if (measurement.name === meas1) {
							calculateMeas1();
							if (item.answer == 0) {
								calculateMeas1();
							}
						} else if (measurement.name === meas2) {
							calculateMeas2();
							if (item.answer == 4) {
								calculateMeas1();
							}
						}
						return [param1, param2];
					}

					const pikiran = optionChecker("Introvert", "Ekstrovert", introvert_percentage, ekstrovert_percentage);
					introvert_percentage = pikiran[0];
					ekstrovert_percentage = pikiran[1];

					const energi = optionChecker("Realistik", "Visioner", realistik_percentage, visioner_percentage);
					realistik_percentage = energi[0];
					visioner_percentage = energi[1];

					const sifat = optionChecker("Emosional", "Rasional", emosional_percentage, rasional_percentage);
					emosional_percentage = sifat[0];
					rasional_percentage = sifat[1];

					const taktik = optionChecker("Improvisasi", "Perencana", improvisasi_percentage, perencana_percentage);
					improvisasi_percentage = taktik[0];
					perencana_percentage = taktik[1];

					const identitas = optionChecker("Tegas", "Waspada", tegas_percentage, waspada_percentage);
					tegas_percentage = identitas[0];
					waspada_percentage = identitas[1];
				}
			});
			if (i === data.length - 1) {
				// const grade_kepribadian = await Grade_kepribadian.create({
				// 	user_id,
				// 	introvert_percentage,
				// 	ekstrovert_percentage,
				// 	realistik_percentage,
				// 	visioner_percentage,
				// 	emosional_percentage,
				// 	rasional_percentage,
				// 	improvisasi_percentage,
				// 	perencana_percentage,
				// 	tegas_percentage,
				// 	waspada_percentage,
				// });
				res.status(200).json({
					status: "success",
					data: {
						// grade_kepribadian,
						introvert_percentage,
						ekstrovert_percentage,
						realistik_percentage,
						visioner_percentage,
						emosional_percentage,
						rasional_percentage,
						improvisasi_percentage,
						perencana_percentage,
						tegas_percentage,
						waspada_percentage,
					},
				});
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "failed",
			message: "Server error",
		});
	}
};

exports.showTestResult = async (req, res) => {
	try {
		const { user_id } = req.params;
		let grade_kepribadian = await Grade_kepribadian.findOne({
			where: { user_id },
		});

		if (!grade_kepribadian) {
			return res.status(400).json({
				status: "failed",
				message: "Data not found",
			});
		}

		grade_kepribadian = JSON.parse(JSON.stringify(grade_kepribadian));

		let pikiran;
		let energi;
		let sifat;
		let taktik;
		let identitas;

		//pikiran
		if (grade_kepribadian.introvert_percentage > grade_kepribadian.ekstrovert_percentage) {
			pikiran = "Introvert";
		} else if (grade_kepribadian.introvert_percentage < grade_kepribadian.ekstrovert_percentage) {
			pikiran = "Ekstrovert";
		} else {
			pikiran = "Introvert/Ekstrovert";
			// introvert_percentage += 1
			// ekstrovert_percentage -= 1
		}

		//energi
		if (grade_kepribadian.realistik_percentage > grade_kepribadian.visioner_percentage) {
			energi = "Realistik";
		} else if (grade_kepribadian.realistik_percentage < grade_kepribadian.visioner_percentage) {
			energi = "Visioner";
		} else {
			energi = "Realistik/Visioner";
		}

		//sifat
		if (grade_kepribadian.emosional_percentage > grade_kepribadian.rasional_percentage) {
			sifat = "Emosional";
		} else if (grade_kepribadian.emosional_percentage < grade_kepribadian.rasional_percentage) {
			sifat = "Rasional";
		} else {
			sifat = "Emosional/Rasional";
		}

		//taktik
		if (grade_kepribadian.improvisasi_percentage > grade_kepribadian.perencana_percentage) {
			taktik = "Improvisasi";
		} else if (grade_kepribadian.improvisasi_percentage < grade_kepribadian.perencana_percentage) {
			taktik = "Perencana";
		} else {
			taktik = "Improvisasi/Perencana";
		}

		//identitas
		if (grade_kepribadian.tegas_percentage > grade_kepribadian.waspada_percentage) {
			identitas = "Tegas";
		} else if (grade_kepribadian.tegas_percentage < grade_kepribadian.waspada_percentage) {
			identitas = "Waspada";
		} else {
			identitas = "Tegas/Waspada";
		}

		let personality = [pikiran, energi, sifat, taktik, identitas];

		let character_personalities = await Character_personalities.findAll({
			include: { model: Measurement, as: "measurements", where: { name: { [Op.or]: personality } } },
		});
		character_personalities = JSON.parse(JSON.stringify(character_personalities));

		//check if personality has 5 measurement (pikiran, energi, sifat, taktik, identitas)
		character_personalities = character_personalities.filter((item) => item.measurements.length > 4)[0];

		res.status(200).json({
			status: "success",
			data: {
				character_personalities,
				detailPercentage: {
					introvert_percentage: grade_kepribadian.introvert_percentage,
					ekstrovert_percentage: grade_kepribadian.ekstrovert_percentage,
					realistik_percentage: grade_kepribadian.realistik_percentage,
					visioner_percentage: grade_kepribadian.visioner_percentage,
					emosional_percentage: grade_kepribadian.emosional_percentage,
					rasional_percentage: grade_kepribadian.rasional_percentage,
					improvisasi_percentage: grade_kepribadian.improvisasi_percentage,
					perencana_percentage: grade_kepribadian.perencana_percentage,
					tegas_percentage: grade_kepribadian.tegas_percentage,
					waspada_percentage: grade_kepribadian.waspada_percentage,
				},
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
