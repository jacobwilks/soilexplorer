/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coforprod', {
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
    siteindexbase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siteindex_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    siteindex_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    siteindex_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fprod_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fprod_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fprod_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cofprodkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'coforprod'
  });
};
