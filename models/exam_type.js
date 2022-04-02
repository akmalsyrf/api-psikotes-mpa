"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Exam_type extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Exam_type.hasMany(models.Exam, {
				foreignKey: {
					name: "exam_type_id",
				},
			});
		}
	}
	Exam_type.init(
		{
			name: DataTypes.STRING,
			is_active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Exam_type",
			paranoid: true,
		}
	);
	return Exam_type;
};
