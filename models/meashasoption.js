"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MeasHasOption extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			MeasHasOption.belongsTo(models.Measurement, {
				foreignKey: {
					name: "measurement_id",
				},
			});
			MeasHasOption.belongsTo(models.Option, {
				foreignKey: {
					name: "option_id",
				},
			});
		}
	}
	MeasHasOption.init(
		{
			measurement_id: DataTypes.INTEGER,
			option_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "MeasHasOption",
		}
	);
	return MeasHasOption;
};
