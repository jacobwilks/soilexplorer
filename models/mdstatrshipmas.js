/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatrshipmas', {
    ltabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    rtabphyname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    relationshipname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cardinality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mandatory: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mdstatrshipmas'
  });
};
