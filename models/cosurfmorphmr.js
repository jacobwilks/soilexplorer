/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosurfmorphmr', {
    geomicrorelief: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogeomdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosurfmormrkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosurfmorphmr'
  });
};
