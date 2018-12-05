/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chtexturemod', {
    texmod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chtkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chtexmodkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chtexturemod'
  });
};
