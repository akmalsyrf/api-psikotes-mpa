"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Student_answers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			exam_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Exams",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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
			time: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("Student_answers");
	},
};
