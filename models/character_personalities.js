"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Character_personalities extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Character_personalities.belongsToMany(models.Measurement, {
				foreignKey: "character_id",
				through: "CharHasMeas",
				as: "measurements",
			});
			Character_personalities.belongsTo(models.Category_character, {
				foreignKey: {
					name: "category_id",
				},
			});
		}
	}
	Character_personalities.init(
		{
			name: DataTypes.STRING,
			slug: DataTypes.STRING,
			category_id: DataTypes.INTEGER,
			code_character: DataTypes.STRING,
			description: DataTypes.TEXT("long"),
		},
		{
			sequelize,
			modelName: "Character_personalities",
			paranoid: true,
		}
	);
	return Character_personalities;
};
