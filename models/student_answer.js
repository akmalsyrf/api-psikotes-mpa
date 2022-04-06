'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_answer.init({
    user_id: DataTypes.INTEGER,
    exam_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    option_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student_answer',
  });
  return Student_answer;
};