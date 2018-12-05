/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatidxdet', {
    tabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    idxphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    idxcolsequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    colphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mdstatidxdet'
  });
};
