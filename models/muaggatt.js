/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('muaggatt', {
    musym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    muname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mustatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slopegraddcp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    slopegradwta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    brockdepmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wtdepannmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wtdepaprjunmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flodfreqdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flodfreqmax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pondfreqprs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aws025wta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aws050wta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aws0100wta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aws0150wta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    drclassdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    drclasswettest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hydgrpdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iccdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iccdcdpct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    niccdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    niccdcdpct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    engdwobdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engdwbdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engdwbll: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engdwbml: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engstafdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engstafll: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engstafml: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engsldcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engsldcp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    englrsdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engcmssdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engcmssmp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urbrecptdcd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urbrecptwta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    forpehrtdcp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hydclprs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    awmmfpwwta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mukey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'muaggatt'
  });
};
