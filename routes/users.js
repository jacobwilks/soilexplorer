const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// Authenticate Route
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }

        User. comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({ user }, config.secret, {
                    expiresIn: 604800 // 1 week in seconds
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    })
});

// Profile
/*
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});
*/
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
//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //res.json({user: req.user});

    return sequelize.query(  "SELECT areasymbol AS Area_symbol, areaname AS Area_name, musym AS Map_unit_symbol, m.mukey AS MUKEY, cropname AS Crop, yldunits AS Units, nonirryield_r AS Non_irrigated, irryield_r AS Irrigated FROM legend AS l INNER JOIN mapunit AS m ON l.lkey = m.lkey AND areasymbol LIKE 'CA789' LEFT OUTER JOIN mucropyld AS y ON m.mukey = y.mukey;" , { type: sequelize.QueryTypes.SELECT})
    .then(users => {
        if (users){
            console.log(users[0]);
            res.json({user: req.user})
        }
        else{
            console.log("failure");
        }
    })
});

// Validate
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;