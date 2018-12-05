/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chaashto', {
    aashtocl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chaashtokey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chaashto'
  });
};
