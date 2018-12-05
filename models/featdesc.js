/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('featdesc', {
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    spatialversion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    featsym: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    featname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    featdesc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    featkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'featdesc'
  });
};
