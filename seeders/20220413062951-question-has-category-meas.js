"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"questionhascategorymeas",
			[
				//pikiran
				{
					question_id: 501,
					cat_meas_id: 1,
				},
				{
					question_id: 502,
					cat_meas_id: 1,
				},
				{
					question_id: 503,
					cat_meas_id: 1,
				},
				{
					question_id: 504,
					cat_meas_id: 1,
				},
				{
					question_id: 505,
					cat_meas_id: 1,
				},
				{
					question_id: 506,
					cat_meas_id: 1,
				},
				{
					question_id: 507,
					cat_meas_id: 1,
				},
				{
					question_id: 508,
					cat_meas_id: 1,
				},
				{
					question_id: 509,
					cat_meas_id: 1,
				},
				{
					question_id: 510,
					cat_meas_id: 1,
				},
				{
					question_id: 511,
					cat_meas_id: 1,
				},
				{
					question_id: 512,
					cat_meas_id: 1,
				},

				//energi
				{
					question_id: 513,
					cat_meas_id: 2,
				},
				{
					question_id: 514,
					cat_meas_id: 2,
				},
				{
					question_id: 515,
					cat_meas_id: 2,
				},
				{
					question_id: 516,
					cat_meas_id: 2,
				},
				{
					question_id: 517,
					cat_meas_id: 2,
				},
				{
					question_id: 518,
					cat_meas_id: 2,
				},
				{
					question_id: 519,
					cat_meas_id: 2,
				},
				{
					question_id: 520,
					cat_meas_id: 2,
				},
				{
					question_id: 521,
					cat_meas_id: 2,
				},
				{
					question_id: 522,
					cat_meas_id: 2,
				},
				{
					question_id: 523,
					cat_meas_id: 2,
				},
				{
					question_id: 524,
					cat_meas_id: 2,
				},

				//sifat
				{
					question_id: 525,
					cat_meas_id: 3,
				},
				{
					question_id: 526,
					cat_meas_id: 3,
				},
				{
					question_id: 527,
					cat_meas_id: 3,
				},
				{
					question_id: 528,
					cat_meas_id: 3,
				},
				{
					question_id: 529,
					cat_meas_id: 3,
				},
				{
					question_id: 530,
					cat_meas_id: 3,
				},
				{
					question_id: 531,
					cat_meas_id: 3,
				},
				{
					question_id: 532,
					cat_meas_id: 3,
				},
				{
					question_id: 533,
					cat_meas_id: 3,
				},
				{
					question_id: 534,
					cat_meas_id: 3,
				},
				{
					question_id: 535,
					cat_meas_id: 3,
				},
				{
					question_id: 536,
					cat_meas_id: 3,
				},

				//taktik
				{
					question_id: 537,
					cat_meas_id: 4,
				},
				{
					question_id: 538,
					cat_meas_id: 4,
				},
				{
					question_id: 539,
					cat_meas_id: 4,
				},
				{
					question_id: 540,
					cat_meas_id: 4,
				},
				{
					question_id: 541,
					cat_meas_id: 4,
				},
				{
					question_id: 542,
					cat_meas_id: 4,
				},
				{
					question_id: 543,
					cat_meas_id: 4,
				},
				{
					question_id: 544,
					cat_meas_id: 4,
				},
				{
					question_id: 545,
					cat_meas_id: 4,
				},
				{
					question_id: 546,
					cat_meas_id: 4,
				},
				{
					question_id: 547,
					cat_meas_id: 4,
				},
				{
					question_id: 548,
					cat_meas_id: 4,
				},

				//identitas
				{
					question_id: 549,
					cat_meas_id: 5,
				},
				{
					question_id: 550,
					cat_meas_id: 5,
				},
				{
					question_id: 551,
					cat_meas_id: 5,
				},
				{
					question_id: 552,
					cat_meas_id: 5,
				},
				{
					question_id: 553,
					cat_meas_id: 5,
				},
				{
					question_id: 554,
					cat_meas_id: 5,
				},
				{
					question_id: 555,
					cat_meas_id: 5,
				},
				{
					question_id: 556,
					cat_meas_id: 5,
				},
				{
					question_id: 557,
					cat_meas_id: 5,
				},
				{
					question_id: 558,
					cat_meas_id: 5,
				},
				{
					question_id: 559,
					cat_meas_id: 5,
				},
				{
					question_id: 560,
					cat_meas_id: 5,
				},
				{
					question_id: 561,
					cat_meas_id: 5,
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
