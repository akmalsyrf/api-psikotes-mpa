"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Answer.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
			Answer.belongsTo(models.Option, {
				foreignKey: {
					name: "option_id",
				},
			});
		}
	}
	Answer.init(
		{
			question_id: DataTypes.INTEGER,
			option_id: DataTypes.INTEGER,
			description: DataTypes.TEXT("long"),
		},
		{
			sequelize,
			modelName: "Answer",
			paranoid: true,
		}
	);
	return Answer;
};
