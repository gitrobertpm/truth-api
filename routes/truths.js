const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../helpers');
const { Truth } = require('../models');


/* GET Truths */
router.get('/', (req, res, next) => {
  console.log('Truths route');
  res.send('Truths route');
});


/* POST Truths */


/* PUT Truths */


/* DELETE Truths */


module.exports = router;