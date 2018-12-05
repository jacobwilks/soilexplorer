/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chdesgnsuffix', {
    desgnsuffix: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chdesgnsfxkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chdesgnsuffix'
  });
};
