"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Intelligence_grades", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			psikotest_id: {
				type: Sequelize.INTEGER,
			},
			correct_qty: {
				type: Sequelize.INTEGER,
			},
			wrong_qty: {
				type: Sequelize.INTEGER,
			},
			unanswered_qty: {
				type: Sequelize.INTEGER,
			},
			total_question: {
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
		await queryInterface.dropTable("Intelligence_grades");
	},
};
