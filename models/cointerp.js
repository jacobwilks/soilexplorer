/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cointerp', {
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mrulekey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mrulename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seqnum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rulekey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rulename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruledepth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interpll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interpllc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interplr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interplrc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interphr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interphrc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interphh: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interphhc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nullpropdatabool: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defpropdatabool: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incpropdatabool: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cointerpkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cointerp'
  });
};
