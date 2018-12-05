/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chtexture', {
    texcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lieutex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chtgkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chtkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chtexture'
  });
};
