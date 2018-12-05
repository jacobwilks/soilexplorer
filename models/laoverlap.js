/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laoverlap', {
    areatypename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    areaname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    areaovacres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lareaovkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'laoverlap'
  });
};
