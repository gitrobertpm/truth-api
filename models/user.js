'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Truth, {
        as: 'usersTruths'
      });
      User.hasMany(models.Vote, {
        as: 'usersVotes'
      });
    }
  };

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Sorry, that username already exists.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a username.'
        },
        notNull: {
          args: true,
          msg: 'Please provide a username.'
        },
        len: {
          args: [2, 10],
          msg: 'Username must be between 2 and 10 characters in length.'
        },
        notContains: {
          args: [['<', '>', '{', '}', '(', ')', ':', ';']],
          msg: 'Provided username contains illegal characters.'
        }
      }
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Please provide a unique email address.'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please provide a valid email address.'
        },
        notNull: {
          args: true,
          msg: 'Please provide an email address.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [[3, 21]],
          msg: 'Password must be at least 4 and no more than 20 characters in length.'
        },
        notEmpty: {
          args: true,
          msg: 'Please provide a password.'
        },
        notNull: {
          args: true,
          msg: 'Please provide a password.'
        }
      }
    },
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT,
    bonafides: DataTypes.TEXT,
    social: DataTypes.STRING,
    settings: DataTypes.TEXT,
    flags: DataTypes.TEXT,
    rank: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};