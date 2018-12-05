/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Sample Soil Polygon Attribute Table', {
    AREA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PERIMETER: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MUSYM: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MUKEY: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Sample Soil Polygon Attribute Table'
  });
};
