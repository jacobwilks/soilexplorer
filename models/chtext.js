/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chtext', {
    recdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chorizontextkind: {
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
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chtextkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chtext'
  });
};
