/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdvfolderattribute', {
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
    tableName: 'sdvfolderattribute'
  });
};
