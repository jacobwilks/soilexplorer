/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotext', {
    recdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comptextkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textcat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textsubcat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cotextkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cotext'
  });
};
