/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('month', {
    monthseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    monthname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'month'
  });
};
