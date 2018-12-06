if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
      , sequelize = null
  
    if (process.env.DATABASE_URL) {
      // the application is executed on Heroku ... use the postgres database
      sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     '5432',
        host:     'ec2-54-197-249-140.compute-1.amazonaws.com',
        logging:  true //false
      })
    } else {
      // the application is executed on the local machine ... use mysql
      sequelize = new Sequelize('example-app-db', 'root', null)
    }
  
    global.db = {
      Sequelize: Sequelize,
      sequelize: sequelize,
      Legend:      sequelize.import(__dirname + '/legend') 
      // add your other models here
    }
  
    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
  }
  
  module.exports = global.db