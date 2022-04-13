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
				foreignKey: "exam_id",
				through: "ExamHasQuestions",
				as: "exams",
			});
			Question.belongsToMany(models.Category_measurement, {
				foreignKey: "cat_meas_id",
				through: "QuestionHasMeas",
				as: "category_measurements",
			});
			Question.belongsTo(models.Category_subject, {
				foreignKey: {
					name: "category_id",
				},
			});
			Question.hasMany(models.Option, {
				foreignKey: {
					name: "question_id",
				},
			});
			Question.hasOne(models.Answer, {
				foreignKey: {
					name: "question_id",
				},
			});
			Question.hasMany(models.Student_answer, {
				foreignKey: {
					name: "question_id",
				},
			});
			Question.hasMany(models.Character_answer, {
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
			duration: DataTypes.TIME,
			edition: DataTypes.STRING,
			category_id: DataTypes.INTEGER,
			tag: DataTypes.STRING,
			duration: DataTypes.TIME,
		},
		{
			sequelize,
			modelName: "Question",
			paranoid: true,
		}
	);
	return Question;
};
