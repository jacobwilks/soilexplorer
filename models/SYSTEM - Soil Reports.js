/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Soil Reports', {
    Report Key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Report Sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Report Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Report Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Report Header Text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Access Report Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Parameters Required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Maximum Number of Parameters: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Access Parameter Form Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Report Parameters Parameter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Include Report: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Map Unit Selection Required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    Report Documentation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Soil Reports'
  });
};
