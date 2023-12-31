const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_CONNECTION_URI;

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;