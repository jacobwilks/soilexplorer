/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chconsistence', {
    rupresblkmst: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rupresblkdry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rupresblkcem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rupresplate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mannerfailure: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stickiness: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plasticity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chconsistkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chconsistence'
  });
};
