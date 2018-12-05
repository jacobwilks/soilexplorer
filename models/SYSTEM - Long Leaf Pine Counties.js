/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Long Leaf Pine Counties', {
    countycode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    statename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    countyname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Long Leaf Pine Counties'
  });
};
