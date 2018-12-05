/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cosoilmoist', {
    soimoistdept_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoistdept_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoistdept_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoistdepb_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoistdepb_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoistdepb_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soimoiststat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comonthkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cosoilmoistkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cosoilmoist'
  });
};
