"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 */
		await queryInterface.bulkInsert(
			"Access_codes",
			[
				{
					user_id: 1,
					psikotest_id: 1,
					access_code: "access_code_1",
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
