/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotreestomng', {
    plantsym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plantsciname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plantcomname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cotreestomngkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cotreestomng'
  });
};
