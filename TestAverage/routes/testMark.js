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

// Client-side JavaScript
const form = document.getElementById('testForm');
const tableBody = document.getElementById('testTableBody');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const subject = document.getElementById('subject').value;
  const mark = parseFloat(document.getElementById('mark').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const date = document.getElementById('date').value;

  // Calculate weighted score
  const weightedScore = (mark * weight) / 100;

  // Add a new row to the table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${subject}</td>
    <td>${mark.toFixed(2)}</td>
    <td>${weight.toFixed(2)}</td>
    <td>${date}</td>
    <td>${weightedScore.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);

  // Reset the form
  form.reset();
});

module.exports = router;
