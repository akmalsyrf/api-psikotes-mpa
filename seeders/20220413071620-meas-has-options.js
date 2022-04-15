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
				//--------------------------------------------------------------------------------------------------------------------

				{
					measurement_id: 3,
					option_id: 2561,
				},
				{
					measurement_id: 3,
					option_id: 2562,
				},
				{
					measurement_id: 4,
					option_id: 2564,
				},
				{
					measurement_id: 4,
					option_id: 2565,
				},

				//--------------------------------------------------------------------------------------------------------------------
				{
					measurement_id: 5,
					option_id: 2626,
				},
				{
					measurement_id: 5,
					option_id: 2627,
				},
				{
					measurement_id: 6,
					option_id: 2629,
				},
				{
					measurement_id: 6,
					option_id: 2630,
				},

				//--------------------------------------------------------------------------------------------------------------------
				{
					measurement_id: 7,
					option_id: 2636,
				},
				{
					measurement_id: 7,
					option_id: 2637,
				},
				{
					measurement_id: 8,
					option_id: 2639,
				},
				{
					measurement_id: 8,
					option_id: 2640,
				},

				//--------------------------------------------------------------------------------------------------------------------
				{
					measurement_id: 9,
					option_id: 2746,
				},
				{
					measurement_id: 9,
					option_id: 2747,
				},
				{
					measurement_id: 10,
					option_id: 2749,
				},
				{
					measurement_id: 10,
					option_id: 2750,
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
