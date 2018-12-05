/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - sdvfolderattribute', {
    folderkey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attributekey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - sdvfolderattribute'
  });
};
