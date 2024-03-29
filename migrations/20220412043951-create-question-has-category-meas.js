"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("QuestionHasCategoryMeas", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			question_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Questions",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			cat_meas_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Category_measurements",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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
		await queryInterface.dropTable("QuestionHasCategoryMeas");
	},
};
