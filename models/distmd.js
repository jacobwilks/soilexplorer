/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distmd', {
    distgendate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    diststatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interpmaxreasons: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    distmdkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'distmd'
  });
};
