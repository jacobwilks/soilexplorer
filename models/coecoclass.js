/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coecoclass', {
    ecoclasstypename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ecoclassref: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ecoclassid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ecoclassname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coecoclasskey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'coecoclass'
  });
};
