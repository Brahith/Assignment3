const express = require('express');
const router = express.Router();
const markControl = require('../controllers/markControl'); // Ensure this path is correct
const DB = require('../config/db');

// Basic route setup
// Route to render all tasks
router.get('/', markControl.getAllTasks);

// Route to render form to create a new task
//router.get('/create', markControl.renderCreateForm);

// Route to handle new task submission
//router.post('/create', markControl.createTask);

// Route to render edit form for a task
//router.get('/edit/:id', markControl.renderEditForm);

// Route to handle edit submission
//router.post('/edit/:id', markControl.updateTask);

// Route to handle task deletion
//router.post('/delete/:id', markControl.deleteTask);


module.exports = router;
