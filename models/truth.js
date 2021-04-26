"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Truth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Truth.belongsTo(models.User, {
        foreignKey: {
          fieldName: "userId",
          allowNull: false,
        },
        as: "truthsTeller",
      });
      Truth.hasMany(models.Vote, {
        as: "truthsVotes",
      });
    }
  };
  Truth.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    truth: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: {
        args: true,
        msg: "Sorry, that exact truth has already been shared here."
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "In some strange way an empty string does feel true, but it actually evaluates to false. So please fill in the Truth field before submitting. 😉"
        },
        notNull: {
          args: true,
          msg: "In some strange way an empty string does feel true, but it actually evaluates to false. So please fill in the Truth field before submitting. 😉"
        },
      }
    },
    argument: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please make an argument to defend the truth you are sharing."
        },
        notNull: {
          args: true,
          msg: "Please make an argument to defend the truth you are sharing."
        },
      }
    },
    tags: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: "Truth",
  });

  return Truth;
};