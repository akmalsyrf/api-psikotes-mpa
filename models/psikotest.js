"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Psikotest extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Psikotest.belongsToMany(models.Exam, {
				foreignKey: "exam_id",
				through: "PsikotestHasExams",
				as: "exams",
			});
			Psikotest.belongsTo(models.Category_test, {
				foreignKey: {
					name: "category_test_id",
				},
			});
			Psikotest.hasMany(models.Access_code, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Intelligence_grade, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Speed_prex_grade, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Accuracy_prex_grade, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Endurance_prex_grade, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Accumulation_speed, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Accumulation_accuracy, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			Psikotest.hasMany(models.Accumulation_endurance, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
		}
	}
	Psikotest.init(
		{
			name: DataTypes.STRING,
			category_test_id: DataTypes.INTEGER,
			test_code: DataTypes.STRING,
			open: DataTypes.DATE,
			close: DataTypes.DATE,
			quota: DataTypes.INTEGER,
			description: DataTypes.TEXT("long"),
			instruction: DataTypes.TEXT("long"),
		},
		{
			sequelize,
			modelName: "Psikotest",
			paranoid: true,
		}
	);
	return Psikotest;
};
