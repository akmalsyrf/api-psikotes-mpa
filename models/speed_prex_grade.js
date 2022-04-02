'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speed_prex_grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Speed_prex_grade.init({
    user_id: DataTypes.INTEGER,
    psikotest: DataTypes.INTEGER,
    exam_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    qty_question: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Speed_prex_grade',
  });
  return Speed_prex_grade;
};