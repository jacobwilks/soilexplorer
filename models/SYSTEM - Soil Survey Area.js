/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Soil Survey Area', {
    Area Symbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Area Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Legend Key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Soil Survey Area'
  });
};
