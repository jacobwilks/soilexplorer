/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chunified', {
    unifiedcl: {
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
    chunifiedkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chunified'
  });
};
