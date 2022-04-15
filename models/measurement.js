"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Measurement extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Measurement.belongsToMany(models.Option, {
				foreignKey: "measurement_id",
				through: "MeasHasOptions",
				as: "options",
			});
			Measurement.belongsToMany(models.Character_personalities, {
				foreignKey: "measurement_id",
				through: "CharHasMeas",
				as: "character_personalities",
			});
			Measurement.belongsTo(models.Category_measurement, {
				foreignKey: {
					name: "category_id",
				},
			});
		}
	}
	Measurement.init(
		{
			name: DataTypes.STRING,
			code_measurement: DataTypes.STRING,
			category_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Measurement",
			paranoid: true,
		}
	);
	return Measurement;
};
