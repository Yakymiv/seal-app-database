const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const sealAppSchema = new Schema({
    name: {
        type: 'String',
        require: true
    },
    type: {
        type: 'String',
        require: true
    },
    onMachine: {
        type: 'String',
        default: 'False'
    }
});

const SealApps = model('sealapps', sealAppSchema);

module.exports = SealApps;