"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("PsikotestHasExams", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			psikotest_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Psikotests",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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
		await queryInterface.dropTable("PsikotestHasExams");
	},
};
