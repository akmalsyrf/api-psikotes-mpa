"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Exam extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Exam.belongsToMany(models.Question, {
				foreignKey: "exam_id",
				through: "ExamHasQuestions",
				as: "questions",
			});
			Exam.belongsToMany(models.Psikotest, {
				foreignKey: "psikotest_id",
				through: "PsikotestHasExams",
				as: "psikotests",
			});
			Exam.belongsTo(models.Exam_type, {
				foreignKey: {
					name: "exam_type_id",
				},
			});
			Exam.belongsTo(models.Psikotest, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Exam.hasOne(models.Speed_prex_grade, {
				foreignKey: {
					name: "exam_id",
				},
			});
			Exam.hasOne(models.Accuracy_prex_grade, {
				foreignKey: {
					name: "exam_id",
				},
			});
			Exam.hasOne(models.Endurance_prex_grade, {
				foreignKey: {
					name: "from_exam_id",
				},
			});
			Exam.hasOne(models.Endurance_prex_grade, {
				foreignKey: {
					name: "to_exam_id",
				},
			});
		}
	}
	Exam.init(
		{
			name: DataTypes.STRING,
			exam_code: DataTypes.STRING,
			exam_type_id: DataTypes.INTEGER,
			question_qty: DataTypes.INTEGER,
			total_duration: DataTypes.TIME,
			tag: DataTypes.STRING,
			open: DataTypes.DATE,
			close: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Exam",
			paranoid: true,
		}
	);
	return Exam;
};
