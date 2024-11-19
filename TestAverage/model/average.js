// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let dataSet =new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    mark: {
        type: Number,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },  
});
module.exports = mongoose.model('Data',dataSet)