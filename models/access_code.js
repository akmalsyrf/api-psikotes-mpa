"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Access_code extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Access_code.belongsTo(models.Psikotest, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
		}
	}
	Access_code.init(
		{
			user_id: DataTypes.INTEGER,
			psikotest_id: DataTypes.INTEGER,
			access_code: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Access_code",
			paranoid: true,
		}
	);
	return Access_code;
};
