/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('copmgrp', {
    pmgroupname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    copmgrpkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'copmgrp'
  });
};
