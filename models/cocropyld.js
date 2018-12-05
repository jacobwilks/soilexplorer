/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cocropyld', {
    cropname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yldunits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nonirryield_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nonirryield_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nonirryield_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    irryield_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    irryield_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    irryield_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cropprodindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vasoiprdgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cocropyldkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cocropyld'
  });
};
