const mongoose = require('mongoose');

const domainSchema = mongoose.Schema({
    domainName: {
        required: true,
        unique: true,
        type: String
    },
    ownerName: {
        required: true,
        type: String
    },
    ownerID: {
        required: true,
        type: String
    },

}, { timestamps: true});

module.exports = mongoose.model('domain', domainSchema);


