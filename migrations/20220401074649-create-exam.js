"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Exams", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			exam_code: {
				type: Sequelize.STRING,
			},
			exam_type_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "exam_types",
					key: "id",
				},
			},
			question_qty: {
				type: Sequelize.INTEGER,
			},
			total_duration: {
				type: Sequelize.TIME,
			},
			tag: {
				type: Sequelize.STRING,
			},
			open: {
				type: Sequelize.DATE,
			},
			close: {
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
		await queryInterface.dropTable("Exams");
	},
};
