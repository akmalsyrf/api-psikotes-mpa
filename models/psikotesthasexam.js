"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class PsikotestHasExam extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			PsikotestHasExam.belongsTo(models.Psikotest, {
				foreignKey: {
					name: "psikotest_id",
				},
			});
			PsikotestHasExam.belongsTo(models.Exam, {
				foreignKey: {
					name: "exam_id",
				},
			});
		}
	}
	PsikotestHasExam.init(
		{
			psikotest_id: DataTypes.INTEGER,
			exam_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "PsikotestHasExam",
		}
	);
	return PsikotestHasExam;
};
