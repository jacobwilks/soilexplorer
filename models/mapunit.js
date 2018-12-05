/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mapunit', {
    musym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    muname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mukind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mustatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muacres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapunitlfw_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapunitlfw_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapunitlfw_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapunitpfa_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mapunitpfa_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mapunitpfa_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    farmlndcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muhelcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muwathelcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muwndhelcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interpfocus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    invesintens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iacornsr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nhiforsoigrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nhspiagr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vtsepticsyscl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mucertstat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mukey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mapunit'
  });
};
