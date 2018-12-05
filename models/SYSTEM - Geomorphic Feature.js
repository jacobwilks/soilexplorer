/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Geomorphic Feature', {
    seqnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    geomfname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    geomfnamep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomfdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obterm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    fieldcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomftiidref: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    geomfiid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Geomorphic Feature'
  });
};
