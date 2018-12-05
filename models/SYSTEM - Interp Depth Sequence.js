/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - Interp Depth Sequence', {
    cointerpkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    depthseq: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'SYSTEM - Interp Depth Sequence'
  });
};
