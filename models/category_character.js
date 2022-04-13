"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Category_character extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Category_character.hasMany(models.Character_personalities, {
				foreignKey: {
					name: "category_id",
				},
			});
		}
	}
	Category_character.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Category_character",
			paranoid: true,
		}
	);
	return Category_character;
};
