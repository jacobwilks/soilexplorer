const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
const router = express.Router();
const pg = require('pg');

// For heroku postgre
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'celgniofihjtjb',
    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    database: 'dhmcr2eu1cjkm',
    password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
    port: 5432,
    ssl: true
  })
  
  const client = new Client({
    user: 'celgniofihjtjb',
    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    database: 'dhmcr2eu1cjkm',
    password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
    port: 5432,
    ssl: true
  })
  client.connect()

// Connect to Database
mongoose.connect(config.database, { useNewUrlParser: true });

// Once Connected to DB
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
}); 

// If an error connecting to db
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
const users = require('./routes/users');

//---START------------------------------------------------------------------//
// Port Number For Local
const port = process.env.port || 8080

// Port Number for Heroku
//var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
//var server_host = process.env.YOUR_HOST || '0.0.0.0';
//---END------------------------------------------------------------------//

app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'Public')));


// Creating body parser
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('invalid endpoint');
    res.render('index');
});
 
//---START------------------------------------------------------------------//
// For Heroku
// app.get('*', function (req, res) {
//     const index = path.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
//   });

// For Local
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
//---END------------------------------------------------------------------//

//---START------------------------------------------------------------------//
// For Heroku
// app.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });

// For Local
app.listen(port, 'localhost', function() {
    console.log('Listening on port %d', port);
});
//---END------------------------------------------------------------------//
