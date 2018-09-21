const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

 
// Connect to Database
mongoose.connect(config.database);

// Once Connected to DB
mongoose.connection.on('connected', () => {
    console.log('connected to db, YAY! ' + config.database);
});

// If an error connecting to db
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
const users = require('./routes/users');

// Port Number
const port = 3000;

app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Creating body parser
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);


app.get('/', (req, res) => {
    res.send('invalid endpoint');

});


app.listen(port,() => {
    console.log('server started on port' + port);
});