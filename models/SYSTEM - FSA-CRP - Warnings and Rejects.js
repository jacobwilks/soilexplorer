/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - FSA-CRP - Warnings and Rejects', {
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    areaname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    musym: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mustatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - FSA-CRP - Warnings and Rejects'
  });
};
