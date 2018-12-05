/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chstructgrp', {
    structgrpname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chstructgrpkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chstructgrp'
  });
};
