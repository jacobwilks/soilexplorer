/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Report Parameters - Counties or Parishes', {
    County or Parish Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    County or Parish Symbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    County or Parish Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Report Parameters - Counties or Parishes'
  });
};
