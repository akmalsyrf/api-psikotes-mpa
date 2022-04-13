"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"meashasoptions",
			[
				{
					measurement_id: 1,
					option_id: 2501,
				},
				{
					measurement_id: 1,
					option_id: 2502,
				},
				{
					measurement_id: 2,
					option_id: 2504,
				},
				{
					measurement_id: 2,
					option_id: 2505,
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
