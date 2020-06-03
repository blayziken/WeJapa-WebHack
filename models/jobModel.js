const mongoose = require('mongoose');

// SCHEMA
const jobSchema = new mongoose.Schema({
    type: {
        type: String
    },
    benefits: [String],
    status: {
        type: String
    },
    hoursPerWeek: {
        type: Number
    },
    title: {
        type: String
    },
    experience: {
        type: String
    },
    salary: {
        type: Number
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date
    }
})


// CREATING MODEL
const Job = mongoose.model('Job', jobSchema)

module.exports = Job