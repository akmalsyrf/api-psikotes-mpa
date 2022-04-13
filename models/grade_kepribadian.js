"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Grade_kepribadian extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Grade_kepribadian.init(
		{
			user_id: DataTypes.INTEGER,
			introvert_percentage: DataTypes.INTEGER,
			ekstrovert_percentage: DataTypes.INTEGER,
			realistik_percentage: DataTypes.INTEGER,
			visioner_percentage: DataTypes.INTEGER,
			emosional_percentage: DataTypes.INTEGER,
			rasional_percentage: DataTypes.INTEGER,
			improvisasi_percentage: DataTypes.INTEGER,
			perencana_percentage: DataTypes.INTEGER,
			tegas_percentage: DataTypes.INTEGER,
			waspada_percentage: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Grade_kepribadian",
			paranoid: true,
		}
	);
	return Grade_kepribadian;
};
