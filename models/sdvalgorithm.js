/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdvalgorithm', {
    algorithmsequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    algorithmname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    algorithminitials: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    algorithmdescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'sdvalgorithm'
  });
};
