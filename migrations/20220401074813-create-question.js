"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Questions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			question_code: {
				type: Sequelize.STRING,
			},
			question: {
				type: Sequelize.TEXT("long"),
			},
			duration: {
				type: Sequelize.TIME,
			},
			edition: {
				type: Sequelize.STRING,
			},
			category_id: {
				type: Sequelize.INTEGER,
			},
			tag: {
				type: Sequelize.STRING,
			},
			duration: {
				type: Sequelize.TIME,
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
		await queryInterface.dropTable("Questions");
	},
};
