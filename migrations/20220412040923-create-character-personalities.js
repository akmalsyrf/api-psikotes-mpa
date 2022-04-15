"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Character_personalities", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			slug: {
				type: Sequelize.STRING,
			},
			category_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Category_characters",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			code_character: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Character_personalities");
	},
};
