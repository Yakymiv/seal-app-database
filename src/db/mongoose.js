const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:N5qxO48aqeFdOUJ8@cluster0.9rmaj.mongodb.net/sadb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database is connected!!!')
})