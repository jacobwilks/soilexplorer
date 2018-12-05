/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Report Parameters - Interpretations', {
    Interpretation Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Report Parameters - Interpretations'
  });
};
