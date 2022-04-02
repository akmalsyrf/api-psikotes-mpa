'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accumulation_accuracy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accumulation_accuracy.init({
    user_id: DataTypes.INTEGER,
    psikotest_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    qty_question: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accumulation_accuracy',
  });
  return Accumulation_accuracy;
};