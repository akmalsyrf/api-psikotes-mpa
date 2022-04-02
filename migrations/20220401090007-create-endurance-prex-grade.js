"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Endurance_prex_grades", {
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
				references: {
					model: "psikotests",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			from_exam_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "exams",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			to_exam_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "exams",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			percentage_progress: {
				type: Sequelize.INTEGER,
			},
			difference_qty: {
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
		await queryInterface.dropTable("Endurance_prex_grades");
	},
};
