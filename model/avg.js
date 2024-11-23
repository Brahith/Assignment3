// MVC --> Model , View , Controller (Routers)
// Import Mongoose
const mongoose = require('mongoose');

// Create a model class for the Test Calculator
let testModel = mongoose.Schema({
    subject: {
        type: String,
        required: true, // The subject is mandatory
    },
    mark: {
        type: Number,
        required: true, // Marks are mandatory
    },
    weight: {
        type: Number,
        required: true, // Test weight is mandatory
    },
    date: {
        type: Date,
        required: true, // Date of the test is mandatory
    }
}, {
    collection: "TestRecords" // Name of the MongoDB collection
});

// Export the Test model
module.exports = mongoose.model('avg', testModel);
