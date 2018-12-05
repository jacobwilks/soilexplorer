/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chtexturegrp', {
    texture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stratextsflag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rvindicator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    texdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chtgkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chtexturegrp'
  });
};
