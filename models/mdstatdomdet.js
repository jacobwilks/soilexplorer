/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatdomdet', {
    domainname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    choicesequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    choice: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    choicedesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    choiceobsolete: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'mdstatdomdet'
  });
};
