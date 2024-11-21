var express = require('express');
var router = express.Router();
let avg = require('../model/avg')

router.get('/', async (req, res, next) => {
    try {
        // Fetch all test records from the database
        const TestList = await avg.find();

        // Render the 'calculator' view with the list of tests
        res.render('calculator', {
            title: 'Test Calculator',
            TestList: TestList // Pass test data to the template
        });
    } 
    catch (err) {
        // Log errors and display an error message in the view
        console.error(err);
        res.render('calculator', {
            error: 'Error fetching tests from the server'
        });
    }
});

module.exports = router;