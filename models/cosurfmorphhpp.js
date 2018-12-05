/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosurfmorphhpp', {
    hillslopeprof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogeomdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosurfmorhppkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosurfmorphhpp'
  });
};
