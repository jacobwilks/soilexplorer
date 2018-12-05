/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Report Parameters - Crops', {
    Crop Sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Crop Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Yield Units: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Report Parameters - Crops'
  });
};
