'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Truth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Truth.belongsTo(models.User, {
        as: 'truthTeller',
        foreignKey: {
          fieldName: 'userId',
          allowNull: false,
        },
      });
    }
  };
  Truth.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Sorry, that title already exists'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a title'
        },
        notNull: {
          args: true,
          msg: 'Please provide a title'
        },
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a description'
        },
        notNull: {
          args: true,
          msg: 'Please provide a description'
        },
      }
    },
    tags: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide tags'
        }
      }
    },
    supportVotes: DataTypes.INTEGER,
    challengeVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Truth',
  });
  return Truth;
};