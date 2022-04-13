"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Grade_kepribadians", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			introvert_percentage: {
				type: Sequelize.INTEGER,
			},
			ekstrovert_percentage: {
				type: Sequelize.INTEGER,
			},
			realistik_percentage: {
				type: Sequelize.INTEGER,
			},
			visioner_percentage: {
				type: Sequelize.INTEGER,
			},
			emosional_percentage: {
				type: Sequelize.INTEGER,
			},
			rasional_percentage: {
				type: Sequelize.INTEGER,
			},
			improvisasi_percentage: {
				type: Sequelize.INTEGER,
			},
			perencana_percentage: {
				type: Sequelize.INTEGER,
			},
			tegas_percentage: {
				type: Sequelize.INTEGER,
			},
			waspada_percentage: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable("Grade_kepribadians");
	},
};
