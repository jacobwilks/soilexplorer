/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Win-Pst Data', {
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssaid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssaname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    musym: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    compname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surftex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comppct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slopel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slopeh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wtdepl: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wtdeph: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wtkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wtbeg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wtend: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hydgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    laydeph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kfact: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    oml: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    omr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    omh: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rockdepl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rockdeph: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phl: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    phh: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shrinksw: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slopegt15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hwtlte2: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Win-Pst Data'
  });
};
