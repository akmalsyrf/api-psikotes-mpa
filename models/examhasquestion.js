"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ExamHasQuestion extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			ExamHasQuestion.belongsTo(models.Exam, {
				foreignKey: {
					name: "exam_id",
				},
			});
			ExamHasQuestion.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
		}
	}
	ExamHasQuestion.init(
		{
			exam_id: DataTypes.INTEGER,
			question_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "ExamHasQuestion",
		}
	);
	return ExamHasQuestion;
};
