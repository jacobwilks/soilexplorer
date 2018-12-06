const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
const models = require('./models');

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

// postgre heroku
// const { Pool, Client } = require('pg')
// const pool = new Pool({
//     user: 'celgniofihjtjb',
//     host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
//     database: 'dhmcr2eu1cjkm',
//     password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
//     port: 5432,
//   })
  
//   const client = new Client({
//     user: 'celgniofihjtjb',
//     host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
//     database: 'dhmcr2eu1cjkm',
//     password: '12ed9f62a38cc6deebccaf63b808f0998dd0bd4e5abcf1ad976d7d4860b81b74',
//     port: 5432,
//   })
//   client.connect()

// postgre local
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'dhmcr2eu1cjkm',
    password: 'root',
    port: 5432,
  })
  
  const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'dhmcr2eu1cjkm',
    password: 'root',
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

// Port Number For Local
const port = process.env.port || 8080

// Port Number for Heroku
//var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
//var server_host = process.env.YOUR_HOST || '0.0.0.0';

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

// For Heroku
// app.get('*', function (req, res) {
//     const index = path.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
//   });

// For Local
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

// For Heroku
// app.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });

// For Local
app.listen(port, 'localhost', function() {
    console.log('Listening on port %d', port);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); 
  })
  .catch(err => {
    console.error('Unasdabhatabase:', err);
  });
// users is the entire array of results
// users[0] gives us the first entry
// make a loop to add them to a table as it reads??????
<<<<<<< HEAD
  sequelize.query(  "SELECT areasymbol AS Area_symbol, areaname AS Area_name, musym AS Map_unit_symbol, m.mukey AS MUKEY, cropname AS Crop, yldunits AS Units, nonirryield_r AS Non_irrigated, irryield_r AS Irrigated FROM legend AS l INNER JOIN mapunit AS m ON l.lkey = m.lkey AND areasymbol LIKE 'CA604' LEFT OUTER JOIN mucropyld AS y ON m.mukey = y.mukey;" , { type: sequelize.QueryTypes.SELECT})
  .then(users => {
})
      //console.log(users[0])
=======
//   sequelize.query(  "SELECT areasymbol AS Area_symbol, areaname AS Area_name, musym AS Map_unit_symbol, m.mukey AS MUKEY, cropname AS Crop, yldunits AS Units, nonirryield_r AS Non_irrigated, irryield_r AS Irrigated FROM legend AS l INNER JOIN mapunit AS m ON l.lkey = m.lkey AND areasymbol LIKE 'CA604' LEFT OUTER JOIN mucropyld AS y ON m.mukey = y.mukey;" , { type: sequelize.QueryTypes.SELECT})
//   .then(users => {
//       console.log(users[0])
//   })
>>>>>>> 18585347ca91a2f521fc7b70bef7334f44bb3df1
