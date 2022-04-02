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
		}
	);
	return Psikotest;
};
