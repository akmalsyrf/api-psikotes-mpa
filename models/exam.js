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
			Exam.belongsToMany(models.Questions, {
				through: "ExamHasQuestions",
				as: "questions",
				foreignKey: "exam_id",
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
		}
	);
	return Exam;
};
