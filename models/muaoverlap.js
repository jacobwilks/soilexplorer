/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('muaoverlap', {
    areaovacres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lareaovkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mukey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    muareaovkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'muaoverlap'
  });
};
