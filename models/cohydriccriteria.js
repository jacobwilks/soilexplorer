/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cohydriccriteria', {
    hydriccriterion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cohydcritkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cohydriccriteria'
  });
};
