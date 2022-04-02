'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endurance_prex_grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endurance_prex_grade.init({
    user_id: DataTypes.INTEGER,
    psikotest_id: DataTypes.INTEGER,
    from_exam_id: DataTypes.INTEGER,
    to_exam_id: DataTypes.INTEGER,
    percentage_progress: DataTypes.INTEGER,
    difference_qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Endurance_prex_grade',
  });
  return Endurance_prex_grade;
};