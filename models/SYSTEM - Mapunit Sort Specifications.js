/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Mapunit Sort Specifications', {
    lseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    museq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mukey: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'SYSTEM - Mapunit Sort Specifications'
  });
};
