/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosurfmorphss', {
    shapeacross: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shapedown: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogeomdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosurfmorsskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosurfmorphss'
  });
};
