"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Question extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Question.belongsToMany(models.Exam, {
				through: "ExamHasQuestions",
				as: "exams",
				foreignKey: "question_id",
			});
			Question.hasMany(models.Option, {
				foreignKey: {
					name: "question_id",
				},
			});
		}
	}
	Question.init(
		{
			title: DataTypes.STRING,
			question_code: DataTypes.STRING,
			question: DataTypes.TEXT("long"),
			category_id: DataTypes.INTEGER,
			tag: DataTypes.STRING,
			duration: DataTypes.TIME,
		},
		{
			sequelize,
			modelName: "Question",
		}
	);
	return Question;
};
