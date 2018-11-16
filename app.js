const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//post gre
// const { Pool, Client } = require('pg')
// const pool = new Pool({
//     user: 'jacobwilks',
//     host: 'localhost',
//     database: 'movedb',
//     password: 'test',
//     port: 5432,
//   })
  
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
  
//   const client = new Client({
//     user: 'jacobwilks',
//     host: 'localhost',
//     database: 'movedb',
//     password: 'test',
//     port: 5432,
//   })
//   client.connect()
  
//   client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
//   })
  
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
// const port = process.env.port || 8080
var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

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

// Index Route
app.get('/', (req, res) => {
    res.send('invalid endpoint');

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
// app.listen(port,() => {
//     console.log('server started on port ' + port);
// });