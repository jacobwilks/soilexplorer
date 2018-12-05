/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cogeomordesc', {
    geomftname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    geomfname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    geomfmod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomfeatid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    existsonfeat: {
      type: DataTypes.INTEGER,
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
    cogeomdkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cogeomordesc'
  });
};
