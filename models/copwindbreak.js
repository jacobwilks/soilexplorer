/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('copwindbreak', {
    wndbrkht_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wndbrkht_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wndbrkht_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    plantsym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plantsciname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plantcomname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    copwindbreakkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'copwindbreak'
  });
};
