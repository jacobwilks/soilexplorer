/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mutext', {
    recdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mapunittextkind: {
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
    mukey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mutextkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'mutext'
  });
};
