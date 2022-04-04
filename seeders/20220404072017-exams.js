"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Exams",
			[
				{
					name: "PSI29032022",
					exam_code: "GANEXAP07396",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP92576",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP78735",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP78735",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP14326",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP23685",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP89277",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP39035",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP55577",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
				{
					name: "PSI29032022",
					exam_code: "GANEXAP55060",
					exam_type_id: 2,
					question_qty: 50,
					total_duration: "00:00:00",
					tag: "psikotes, kecermatan",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
