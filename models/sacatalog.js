/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sacatalog', {
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    areaname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saversion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saverest: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tabularversion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tabularverest: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tabnasisexportdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tabcertstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tabcertstatusdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fgdcmetadata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sacatalogkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'sacatalog'
  });
};
