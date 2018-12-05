/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coforprodo', {
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
    fprodunits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cofprodkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cofprodokey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'coforprodo'
  });
};
