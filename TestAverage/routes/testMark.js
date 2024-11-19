const express = require('express');
const router = express.Router();

// Model import (assuming you are using a "Book" model)
const Book = require('../model/average');

// Basic route setup
router.get('/', async (req, res, next) => {
  try {
    // Add your logic here
    res.status(200).send('Route working');
  } catch (error) {
    next(error); // Handle errors
  }
});
module.exports = router;
