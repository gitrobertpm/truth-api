const express = require('express');
const router = express.Router();
const colors = require('colors');
const { asyncHandler, authenticateUser } = require('../helpers');
const { Truth, User } = require('../models');


/* Schema for defining Truth data to return when responding to GET Truth requests */
const getTruthsSchema = { 
  attributes: { 
    exclude: ['createdAt', 'updatedAt'],
  },
  include: [{
    model: User,
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'password'],
    },
    as: 'truthTeller',
  }]
};


/* GET Truths */
router.get('/', asyncHandler( async (req, res, next) => {
  console.log('Getting truths'.cyan);
  const truths = await Truth.findAll(getTruthsSchema);
  console.log(`Retrieved ${truths.length} truths`.green);
  res.status(200).json(truths);
}));


/* GET Truth by id */
router.get('/:id', asyncHandler( async (req, res, next) => {
  const id = req.params.id;
  console.log(`Getting truth: ${id}`.cyan);
  const truth = await Truth.findByPk(id, getTruthsSchema);

  if (truth) {
    console.log(`Retrieved truth: ${truth.truth}`.green);
    res.status(200).json(truth);
  } else {
    const err = new Error('The resource you requested does not appear to exist');
    err.status = 404;
    next(err);
  }
}));


/* POST new Truth */
router.post('/', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const body = req.body;
  body.userId = authenticatedUser.id;

  if (body) console.log(`Creating new Truth: ${body.truth}`.cyan);
  const truth = await Truth.create(body);
  if (truth) console.log(`Created Truth: ${truth.id}`.green);
  res.status(201).location(`/api/truths/${truth.id}`).end();
}));


/* PUT Truths */
router.put('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const body = req.body;
  // body.userId = authenticatedUser.id;

  // if (body) console.log(`Creating new Truth: ${body.truth}`.cyan);
  // const truth = await Truth.create(body);
  // if (truth) console.log(`Created Truth: ${truth.id}`.green);
  // res.status(201).location(`/api/truths/${truth.id}`).end();
}));

/* DELETE Truths */
router.delete('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const body = req.body;
  // body.userId = authenticatedUser.id;

  // if (body) console.log(`Creating new Truth: ${body.truth}`.cyan);
  // const truth = await Truth.create(body);
  // if (truth) console.log(`Created Truth: ${truth.id}`.green);
  // res.status(201).location(`/api/truths/${truth.id}`).end();
}));

module.exports = router;