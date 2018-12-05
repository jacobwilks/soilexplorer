/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codiagfeatures', {
    featkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    featdept_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featdept_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featdept_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featdepb_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featdepb_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featdepb_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featthick_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featthick_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    featthick_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codiagfeatkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'codiagfeatures'
  });
};
