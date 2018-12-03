const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

var connectionString = "postgres://celgniofihjtjb:12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74@ec2-54-197-249-140.compute-1.amazonaws.com:5432/dhmcr2eu1cjkm"
 
pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});

//post gre
// const { Pool, Client } = require('pg')
// const pool = new Pool({
//     user: 'pchprvkbglwijx',
//     host: 'ec2-23-23-153-145.compute-1.amazonaws.com',
//     database: 'd1am7kmofqfr69',
//     password: '8806251efc0964cd8fb3efeb3a31dc1e91c29d877446413b69f6834d3a9c7878',
//     port: 5432,
//   })
  
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
  
//   const client = new Client({
//     user: 'pchprvkbglwijx',
//     host: 'ec2-23-23-153-145.compute-1.amazonaws.com',
//     database: 'd1am7kmofqfr69',
//     password: '8806251efc0964cd8fb3efeb3a31dc1e91c29d877446413b69f6834d3a9c7878',
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

});

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  });
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })


app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
// app.listen(port,() => {
//     console.log('server started on port ' + port);
// });