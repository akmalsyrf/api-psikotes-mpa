"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Category_measurement extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Category_measurement.belongsToMany(models.Question, {
				foreignKey: "cat_meas_id",
				through: "QuestionHasCategoryMeas",
				as: "questions",
			});
			Category_measurement.hasMany(models.Measurement, {
				foreignKey: {
					name: "category_id",
				},
			});
		}
	}
	Category_measurement.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Category_measurement",
			paranoid: true,
		}
	);
	return Category_measurement;
};
