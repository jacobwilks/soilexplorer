/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coeplants', {
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
    forestunprod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rangeprod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coeplantskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'coeplants'
  });
};
