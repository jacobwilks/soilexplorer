/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Report Parameters - Map Unit Description Categories', {
    Map Unit Description Category Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Map Unit Description Category Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Report Parameters - Map Unit Description Categories'
  });
};
