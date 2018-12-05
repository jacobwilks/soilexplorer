/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatidxmas', {
    tabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    idxphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    uniqueindex: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mdstatidxmas'
  });
};
