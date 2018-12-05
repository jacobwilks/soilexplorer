/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP - Subreport - Interp Reasons - Interp 3', {
    cokey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interphrc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interphr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ruledesign: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zerolevelinterphr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'TEMP - Subreport - Interp Reasons - Interp 3'
  });
};
