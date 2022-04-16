"use strict";

const { Category_test } = require("../models");

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Exam_types",
			[
				{
					name: "quiz",
					is_active: true,
				},
				{
					name: "tryout",
					is_active: true,
				},
				{
					name: "finalexam",
					is_active: true,
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"Category_tests",
			[
				{
					name: "kecermatan",
					is_active: true,
				},
				{
					name: "kecerdasan",
					is_active: true,
				},
				{
					name: "kepribadian",
					is_active: true,
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"Category_subjects",
			[
				{
					name: "Akademik",
				},
				{
					name: "Psikotest",
				},
			],
			{}
		);

		//get category_test id
		const categoryTest = await Category_test.findAll();

		const getCategoryTestId = (name) => {
			return categoryTest.filter((data) => data.name === name)[0].id;
		};

		await queryInterface.bulkInsert(
			"Psikotests",
			[
				{
					name: "Psikotest Kecermatan",
					category_test_id: getCategoryTestId("kecermatan"),
					test_code: "PSI29032022",
					open: "2022-04-04 01:30:59",
					close: "2022-04-04 01:30:59",
					quota: 20,
					description: "Psikotest Kecermatan",
					instruction: "Psikotest Kecermatan",
				},
			],
			{}
		);

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
