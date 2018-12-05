/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatrshipdet', {
    ltabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    rtabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    relationshipname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ltabcolphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    rtabcolphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mdstatrshipdet'
  });
};
