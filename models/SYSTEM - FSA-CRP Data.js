/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - FSA-CRP Data', {
    stcty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ssaid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    musym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mu_lleaf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mu_leach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mu_ifactor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mu_kfactor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mu_LS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mu_tfactor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'SYSTEM - FSA-CRP Data'
  });
};
