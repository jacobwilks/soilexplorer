/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Survey Area-County Geographic Coincidence', {
    stcoid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    stssaid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Survey Area-County Geographic Coincidence'
  });
};
