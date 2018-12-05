/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Help Text', {
    HelpTextKey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    HelpText: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Help Text'
  });
};
