"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Category_test extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Category_test.hasMany(models.Psikotest, {
				foreignKey: {
					name: "category_test_id",
				},
			});
		}
	}
	Category_test.init(
		{
			name: DataTypes.STRING,
			is_active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Category_test",
			paranoid: true,
		}
	);
	return Category_test;
};
