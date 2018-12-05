/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosurffrags', {
    sfragcov_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sfragcov_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sfragcov_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    distrocks_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    distrocks_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    distrocks_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sfragkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sfragsize_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sfragsize_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sfragsize_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sfragshp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sfraground: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sfraghard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosurffragskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosurffrags'
  });
};
