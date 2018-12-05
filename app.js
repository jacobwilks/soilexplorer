const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
//const models = require('./models/legend');
//Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dhmcr2eu1cjkm', 'celgniofihjtjb','12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74', {
    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    dialectOptions: {
        ssl: true
    }
});
const models = sequelize.import(soilexplorer + "/models");
//post gre
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'celgniofihjtjb',
    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    database: 'dhmcr2eu1cjkm',
    password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
    port: 5432,
  })
  
  const client = new Client({
    user: 'celgniofihjtjb',
    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    database: 'dhmcr2eu1cjkm',
    password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
    port: 5432,
  })
  client.connect()

// Connect to Database
mongoose.connect(config.database);

// Once Connected to DB
mongoose.connection.on('connected', () => {
    console.log('connected ssto db, YAY! ' + config.database);
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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); 
  })
  .catch(err => {
    console.error('Unabhatabase:', err);
  });

  sequelize.query("SELECT areasymbol, saverest FROM sacatalog", { type: sequelize.QueryTypes.SELECT})
  .then(users => {
  })

