/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Palouse Soil Survey Areas', {
    STSSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Palouse Soil Survey Areas'
  });
};
