"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Accuracy_prex_grade extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Accuracy_prex_grade.belongsTo(models.Psikotest, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Accuracy_prex_grade.belongsTo(models.Exam, {
				foreignKey: {
					name: "exam_id",
				},
			});
		}
	}
	Accuracy_prex_grade.init(
		{
			user_id: DataTypes.INTEGER,
			psikotest_id: DataTypes.INTEGER,
			exam_id: DataTypes.INTEGER,
			qty: DataTypes.INTEGER,
			qty_question: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Accuracy_prex_grade",
			paranoid: true,
		}
	);
	return Accuracy_prex_grade;
};
