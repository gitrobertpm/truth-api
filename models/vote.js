"use strict";

const Sequelize = require('sequelize');

const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vote.belongsTo(models.User, {
        foreignKey: {
          fieldName: "userId",
          allowNull: false,
        },
        as: "voter"
      });
      Vote.belongsTo(models.Truth, {
        foreignKey: {
          fieldName: "truthId",
          allowNull: false,
        },
        as: "truthVotedOn"
      });
    }
  };
  Vote.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    vote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "Vote",
  });
  return Vote;
};