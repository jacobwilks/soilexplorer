/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Template Database Information', {
    Item Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Item Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Item Value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Item Narrative: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Template Database Information'
  });
};
