/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosurfmorphgc', {
    geomposmntn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomposhill: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geompostrce: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geomposflats: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cogeomdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosurfmorgckey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosurfmorphgc'
  });
};
