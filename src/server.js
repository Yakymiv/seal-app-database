const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongoose').Types.ObjectId;

const Machine = require('./db/schems/machine_schema');
const SealApps = require('./db/schems/sealApp_schema');


require('./db/mongoose');

const app = express();

app.use(bodyParser.json())

const publicDirectoryPath = path.join(__dirname, '../client/build/');
app.use(express.static(publicDirectoryPath));
app.use(cors());

const port = process.env.PORT || 5000;

//Get seal app list
app.get('/sealapp', async(req, res) => {
    try {
        const seallist = await SealApps.find({});
        res.send(seallist);
    } catch(e) {
        res.status(400).send(e)
    }
});

//Create seal app
app.post('/sealapp', async(req, res) => {
    try {
        if (!req.body.sealName || !req.body.sealType) throw 'Bad request, need [Name] and [Type]';
        const newSealApp = new SealApps({
            name: req.body.sealName,
            type: req.body.sealType
        })
        const oldSealApp = await SealApps.findOne({name: req.body.sealName});
        if (!oldSealApp) {
            newSealApp.save();
            res.status(201).send('Created!');
        } else if (oldSealApp) {
            throw 'Seal in base';
        } else {
            throw 'Bad request';
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

//Delete seal app
//Link = url/sealapp?id=[ID]
app.delete('/sealapp', async(req, res) => {
    try {
        if (!ObjectId.isValid(req.query.id)) throw 'Bad request, need [ID]';
        const sealApp = await SealApps.findByIdAndDelete({_id: req.query.id});
        if (sealApp){
            res.status(200).send(`${sealApp.name} deleted`)
        } else {
            throw 'Bad request';
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

//Update seal app
//Link = url/sealapp?id=[ID]
app.patch('/sealapp', async(req, res) => {
    try {
        if (!ObjectId.isValid(req.query.id)) throw 'Not currect ID';
        const seal = await SealApps.findById(req.query.id);
        if (seal.onMachine.toString() === req.body.onmachine.toString()) throw 'Not need change';
        if (req.body.onmachine === "False") {
            const newSeal = await SealApps.findByIdAndUpdate(req.query.id, {onMachine: "False"}, {new: true});
            res.status(200).send(`Changes made: ${newSeal.name} on Stock`);
        }else {
            const machine = await Machine.findOne({number: req.body.onmachine});
            if (!machine) throw `Missing machine: ${req.body.onmachine}`;
            sealType = seal.type.toLowerCase();
            machineType = machine.type.toLowerCase();
            if (sealType !== machineType) throw 'Different type';
            const newSeal = await SealApps.findByIdAndUpdate(req.query.id, {onMachine: req.body.onmachine}, {new: true});
            res.status(200).send(`Changes made: ${newSeal.name} on ${newSeal.onMachine} machine`);
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

//Get machine list
app.get('/machine', async(req, res) => {
    try{
        const machineList = await Machine.find({});
        res.send(machineList);
    } catch(e) {
        res.status(400).send(e);
    }
})

//Create machine
app.post('/machine', async (req, res) => {
    try {
        if (!req.body.number || !req.body.type) throw 'Bad request, need [Number] and [Type]';
        const newMachine = Machine({
            number: req.body.number,
            type: req.body.type
        });
        const oldMachine = await Machine.findOne({number: req.body.number});
        if (!oldMachine) {
            newMachine.save();
            res.status(200).send('Created!');
        } else if (oldMachine) {
            throw 'Machine in base';
        } else {
            throw 'Bad request';
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

//Delete machine
//Link = url/machine?id=[ID]
app.delete('/machine', async(req, res) => {
    try {
        if (!ObjectId.isValid(req.query.id)) throw 'Bad request, need [ID]';
        const machine = await Machine.findByIdAndDelete({_id: req.query.id});
        if (machine){
            res.status(200).send(`Machine number: ${machine.number} deleted`)
        } else {
            throw 'Bad request';
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})