const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    servicename: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: Date, required: true},

},  {
    timestamps: true,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;