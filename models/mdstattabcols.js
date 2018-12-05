/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstattabcols', {
    tabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    colsequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    colphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    collogname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    collabel: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    logicaldatatype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notnull: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fieldsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precision: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimum: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maximum: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    uom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    domainname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coldesc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mdstattabcols'
  });
};
