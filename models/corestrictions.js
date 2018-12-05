/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corestrictions', {
    reskind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reshard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resdept_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resdept_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resdept_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resdepb_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resdepb_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resdepb_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resthk_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resthk_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resthk_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    corestrictkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'corestrictions'
  });
};
