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
        msg: 'Sorry, that exact truth has already been shared here.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'An empty string may somehow feel true in some strange and metaphysical way, but it actually evaluates to false. So please enter the truth you wish to share in the field provided before submitting. 😉'
        },
        notNull: {
          args: true,
          msg: 'An empty string may somehow feel true in some strange and metaphysical way, but it actually evaluates to false. So please enter the truth you wish to share in the field provided before submitting. 😉'
        },
      }
    },
    argument: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please make an argument to defend the truth you are sharing.'
        },
        notNull: {
          args: true,
          msg: 'Please make an argument to defend the truth you are sharing.'
        },
      }
    },
    tags: {
      type: DataTypes.STRING,
    },
    supportVotes: DataTypes.INTEGER,
    challengeVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Truth',
  });

  return Truth;
};