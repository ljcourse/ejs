const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ["individual", "partner", "team",],

    },
    category: {
        type: String,
    },
    discipline: {
        type: String,
    },
});

const Sport = mongoose.model('sport', sportSchema);
module.exports = Sport;