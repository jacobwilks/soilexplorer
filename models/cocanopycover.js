/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cocanopycover', {
    plantcov: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
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
    cocanopycovkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cocanopycover'
  });
};
