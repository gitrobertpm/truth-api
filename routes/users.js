const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { asyncHandler, authenticateUser } = require('../helpers');
const { User } = require('../models');


/* GET Users */
router.get('/users', (req, res, next) => {
  console.log('Users route');
  res.send('Users route');
});


/* POST Users */


module.exports = router;
