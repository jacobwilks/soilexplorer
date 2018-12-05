/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distlegendmd', {
    areatypename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    areaname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssastatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cordate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exportcertstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exportcertdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exportmetadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distmdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distlegendmdkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'distlegendmd'
  });
};
