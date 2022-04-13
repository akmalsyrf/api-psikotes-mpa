"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CharHasMeas extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			CharHasMeas.belongsTo(models.Character_personalities, {
				foreignKey: {
					name: "character_id",
				},
			});
			CharHasMeas.belongsTo(models.Measurement, {
				foreignKey: {
					name: "measurement_id",
				},
			});
		}
	}
	CharHasMeas.init(
		{
			character_id: DataTypes.INTEGER,
			measurement_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "CharHasMeas",
		}
	);
	return CharHasMeas;
};
