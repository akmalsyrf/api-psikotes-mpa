"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Option extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Option.belongsToMany(models.Measurement, {
				foreignKey: "option_id",
				through: "MeasHasOptions",
				as: "measurements",
			});
			Option.belongsTo(models.Question, {
				foreignKey: {
					name: "question_id",
				},
			});
			Option.hasMany(models.Answer, {
				foreignKey: {
					name: "option_id",
				},
			});
			Option.hasMany(models.Student_answer, {
				foreignKey: {
					name: "option_id",
				},
			});
			Option.hasMany(models.Character_answer, {
				foreignKey: {
					name: "option_id",
				},
			});
		}
	}
	Option.init(
		{
			option_text: DataTypes.TEXT("long"),
			question_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Option",
			paranoid: true,
		}
	);
	return Option;
};
