/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosoiltemp', {
    soitempmm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdept_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdept_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdept_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdepb_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdepb_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soitempdepb_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comonthkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosoiltempkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosoiltemp'
  });
};
