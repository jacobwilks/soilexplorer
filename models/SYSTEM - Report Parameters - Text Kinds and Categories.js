/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Report Parameters - Text Kinds and Categories', {
    Text Kind and Category Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Text Kind and Category: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Report Parameters - Text Kinds and Categories'
  });
};
