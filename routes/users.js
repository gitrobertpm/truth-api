const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { asyncHandler, authenticateUser } = require('../helpers');
const { User } = require('../models');


/* GET Users */
router.get('/', authenticateUser, asyncHandler( async (req, res, next) => {
  console.log('Getting authenticated user with username: ', req.currentUser.userName);

  const user = await User.findOne({ 
    where: { 
      emailAddress: req.currentUser.emailAddress 
    }, 
    attributes: { 
      exclude: ['createdAt', 'updatedAt']
    } 
  });

  console.log('Retrieved', user.userName);
  res.status(200).json({ user });
}));


/* POST Users */
router.post('/',  asyncHandler( async (req, res, next) => {
  const user = req.body;
  await User.create(user);
  console.log('Post Users route', user);
  res.location('./').status(201).redirect('./');
}));

module.exports = router;
