/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chfrags', {
    fragvol_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragvol_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragvol_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fragsize_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragsize_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragsize_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fragshp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fraground: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fraghard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chfragskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chfrags'
  });
};
