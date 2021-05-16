const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const machineSchema = new Schema({
    number: {
        type: 'Number',
        required: true
    },
    type: {
        type: "String",
        lowercase: true,
        required: true
    }
})

const Machine = model('machines', machineSchema);

module.exports = Machine;