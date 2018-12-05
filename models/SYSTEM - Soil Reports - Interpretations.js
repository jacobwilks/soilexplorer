/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Soil Reports - Interpretations', {
    Report Key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Rule Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Rule Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Rule Title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'SYSTEM - Soil Reports - Interpretations'
  });
};
