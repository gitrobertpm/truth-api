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
    truth: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Sorry, a truth with by that name already exists'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please give a name to the truth you are sharing'
        },
        notNull: {
          args: true,
          msg: 'Please give a name to the truth you are sharing'
        },
      }
    },
    argument: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please make an argument to defend the truth you are sharing'
        },
        notNull: {
          args: true,
          msg: 'Please make an argument to defend the truth you are sharing'
        },
      }
    },
    tags: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'If you are going to provide some tags, then provide some tags, yo!'
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