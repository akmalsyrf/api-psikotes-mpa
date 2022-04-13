"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Student_answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Student_answer.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
			Student_answer.belongsTo(models.Option, {
				foreignKey: {
					name: "option_id",
				},
			});
			Student_answer.belongsTo(models.Exam, {
				foreignKey: {
					name: "exam_id",
				},
			});
		}
	}
	Student_answer.init(
		{
			user_id: DataTypes.INTEGER,
			exam_id: DataTypes.INTEGER,
			question_id: DataTypes.INTEGER,
			option_id: DataTypes.INTEGER,
			time: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Student_answer",
			paranoid: true,
			// hooks: {
			// 	beforeCreate: (student_answer, options) => {
			// 		student_answer.dataValues.createdAt = new Date().toISOString().replace(/T/, " ").replace(/\..+/g, "");
			// 		student_answer.dataValues.updatedAt = new Date().toISOString().replace(/T/, " ").replace(/\..+/g, "");
			// 	},
			// },
		}
	);
	return Student_answer;
};
