/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Geomorphic Feature Type', {
    geomftname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    geomftdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obterm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    fieldcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomftiid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'SYSTEM - Geomorphic Feature Type'
  });
};
