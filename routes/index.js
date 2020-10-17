const express = require('express');
const router = express.Router();

/* GET Home */
router.get('/', (req, res, next) => {
  console.log('Home route');
  res.redirect('/truths');
});

module.exports = router;
