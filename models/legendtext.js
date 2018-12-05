/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legendtext', {
    recdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    legendtextkind: {
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
    lkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legtextkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'legendtext'
  });
};
