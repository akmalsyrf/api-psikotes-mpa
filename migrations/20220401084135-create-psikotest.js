"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Psikotests", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			category_test_id: {
				type: Sequelize.INTEGER,
			},
			test_code: {
				type: Sequelize.STRING,
			},
			open: {
				type: Sequelize.DATE,
			},
			close: {
				type: Sequelize.DATE,
			},
			quota: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT("long"),
			},
			instruction: {
				type: Sequelize.TEXT("long"),
			},
			createdAt: {
				allowNull: false,
				type: "TIMESTAMP",
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				allowNull: false,
				type: "TIMESTAMP",
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Psikotests");
	},
};
