/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comonth', {
    monthseq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flodfreqcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    floddurcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pondfreqcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ponddurcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ponddep_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ponddep_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ponddep_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgprecip_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgprecip_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgprecip_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgpotet_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgpotet_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dlyavgpotet_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comonthkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'comonth'
  });
};
