/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chpores', {
    poreqty_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poreqty_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poreqty_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poresize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    porecont: {
      type: DataTypes.STRING,
      allowNull: true
    },
    poreshp: {
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
    chporeskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chpores'
  });
};
