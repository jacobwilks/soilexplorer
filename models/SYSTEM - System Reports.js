/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - System Reports', {
    Report Key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Report Sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Report Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Access Report Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Parameters Required: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Access Parameter Form Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Maximum Number of Parameters: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Include Report: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    tableName: 'SYSTEM - System Reports'
  });
};
