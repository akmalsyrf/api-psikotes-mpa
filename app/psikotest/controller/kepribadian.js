const { Question, Option, MeasHasOption, Measurement, Grade_kepribadian } = require("../../../models");

exports.sendAnswerKepribadian = async (req, res) => {
	try {
		// const { user_id, data } = req.body;
		// data.forEach(async (item) => {
		// });
		const { id_question, id_answer } = req.body;

		const question = await Question.findOne({
			where: {
				id: id_question,
			},
			include: { model: Option },
		});
		// console.log(JSON.parse(JSON.stringify(question)));
		// const options = JSON.parse(JSON.stringify(question.Options));
		// const measHasOption = JSON.parse(JSON.stringify(question.Meas_has_options))

		let answer = [];
		// await options.forEach(async (item) => {
		// 	// console.log(item.id);
		// 	let meas_has_option = await MeasHasOption.findOne({
		// 		where: {
		// 			option_id: item.id,
		// 		},
		// 	});
		// 	meas_has_option = JSON.parse(JSON.stringify(meas_has_option));

		// 	if (meas_has_option !== null) {
		// 		answer.push(meas_has_option);
		// 	}
		// });

		const options = await Option.findAll({
			where: {
				question_id: id_question,
			},
			include: { model: MeasHasOption },
		});
		console.log(options);

		let intovert_percentage = 50;
		let ekstrovert_percentage = 50;
		let realistik_percentage = 50;
		let visioner_percentage = 50;
		let emosional_percentage = 50;
		let rasional_percentage = 50;
		let improvisasi_percentage = 50;
		let perencana_percentage = 50;
		let tegas_percentage = 50;
		let waspada_percentage = 50;

		await answer.forEach(async (item, i) => {
			if (options[id_answer].id === Number(item.option_id)) {
				let measurement = await Measurement.findOne({
					where: {
						id: item.measurement_id,
					},
				});
				measurement = JSON.parse(JSON.stringify(measurement));

				if (measurement.name === "Introvert") {
					if (Number(id_answer) === 0) {
						intovert_percentage += 8;
						ekstrovert_percentage -= 8;
					} else if (Number(id_answer) === 1) {
						intovert_percentage += 4;
						ekstrovert_percentage -= 4;
					}
				} else if (measurement.name === "Ekstrovert") {
					if (Number(id_answer) === 3) {
						ekstrovert_percentage += 8;
						intovert_percentage -= 8;
					} else if (Number(id_answer) === 4) {
						ekstrovert_percentage += 4;
						intovert_percentage -= 4;
					}
				}
			}

			if (i === answer.length - 1) {
				// await Grade_kepribadian.create({user_id, intovert_percentage, ekstrovert_percentage, realistik_percentage, visioner_percentage, emosional_percentage, rasional_percentage, improvisasi_percentage, perencana_percentage, tegas_percentage, waspada_percentage});
				res.status(200).json({
					status: "success",
					data: {
						intovert_percentage,
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
