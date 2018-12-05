/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distinterpmd', {
    rulename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ruledesign: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruledesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dataafuse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mrecentrulecwlu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rulekey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distmdkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distinterpmdkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'distinterpmd'
  });
};
