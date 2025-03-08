const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    companyName : {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    posted_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true

    }
},{ timestamps: true});

const Job = mongoose.model('Job',jobSchema);

module.exports = Job;