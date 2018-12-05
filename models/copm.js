/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('copm', {
    pmorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pmmodifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pmgenmod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pmkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pmorigin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    copmgrpkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    copmkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'copm'
  });
};
