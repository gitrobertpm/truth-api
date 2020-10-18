const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { asyncHandler, authenticateUser } = require('./helpers');
const { User, Truth } = require('../models');


/* GET Support Votes */
router.get('/:id/supportvote', (req, res, next) => {
  console.log('Truths Support Votes route');
  res.send('Truths Support Votes route');
});


/* GET Challenge Votes */


/* POST Support Votes */


/* POST Challenge Votes */


module.exports = router;