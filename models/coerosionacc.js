/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coerosionacc', {
    erokind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coeroacckey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'coerosionacc'
  });
};
