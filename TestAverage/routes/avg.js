const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController'); // Update the path as needed

// Define routes
router.get('/home', testController.getAllTests); // Main page
router.get('/', testController.getAllTests); // Display all test entries
router.post('/add', testController.createTest); // Add a new test entry
router.get('/edit/:id', testController.renderEditForm); // Render the edit form for a specific test
router.post('/edit/:id', testController.updateTest); // Update an existing test entry
router.post ('/delete/:id', testController.deleteTest); // Delete a test entry

module.exports = router;