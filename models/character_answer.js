"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Character_answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Character_answer.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
			Character_answer.belongsTo(models.Option, {
				foreignKey: {
					name: "option_id",
				},
			});
		}
	}
	Character_answer.init(
		{
			user_id: DataTypes.INTEGER,
			question_id: DataTypes.INTEGER,
			option_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Character_answer",
			paranoid: true,
		}
	);
	return Character_answer;
};
