/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstattabs', {
    tabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    tablogname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    tablabel: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    tabdesc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    iefilename: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'mdstattabs'
  });
};
