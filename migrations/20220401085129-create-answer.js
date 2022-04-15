"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Answers", {
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
			option_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Options",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			description: {
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
			deletedAt: {
				type: "TIMESTAMP",
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Answers");
	},
};
