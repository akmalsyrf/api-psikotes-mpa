"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Intelligence_grade extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Intelligence_grade.init(
		{
			user_id: DataTypes.INTEGER,
			psikotest_id: DataTypes.INTEGER,
			correct_qty: DataTypes.INTEGER,
			wrong_qty: DataTypes.INTEGER,
			unanswered_qty: DataTypes.INTEGER,
			total_question: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Intelligence_grade",
			paranoid: true,
		}
	);
	return Intelligence_grade;
};
