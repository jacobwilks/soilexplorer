/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legend', {
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
    areaacres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mlraoffice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legenddesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssastatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mouagncyresp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projectscale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cordate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ssurgoarchived: {
      type: DataTypes.DATE,
      allowNull: true
    },
    legendsuituse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legendcertstat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'legend'
  });
};
