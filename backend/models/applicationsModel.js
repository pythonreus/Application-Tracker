const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Application = mongoose.model('Application',applicationSchema);

module.exports = Application;