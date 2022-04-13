"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class QuestionHasCategoryMeas extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			QuestionHasCategoryMeas.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
			QuestionHasCategoryMeas.belongsTo(models.Category_measurement, {
				foreignKey: {
					name: "cat_meas_id",
				},
			});
		}
	}
	QuestionHasCategoryMeas.init(
		{
			question_id: DataTypes.INTEGER,
			cat_meas_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "QuestionHasCategoryMeas",
		}
	);
	return QuestionHasCategoryMeas;
};
