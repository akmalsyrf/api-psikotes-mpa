'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accumulation_endurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accumulation_endurance.init({
    user_id: DataTypes.INTEGER,
    psikotest_id: DataTypes.INTEGER,
    percentage_progress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accumulation_endurance',
  });
  return Accumulation_endurance;
};