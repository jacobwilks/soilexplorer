/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdstatdommas', {
    domainname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    domainmaxlen: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'mdstatdommas'
  });
};
