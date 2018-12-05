/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chstruct', {
    structgrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    structsize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    structtype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    structid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    structpartsto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chstructgrpkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chstructkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chstruct'
  });
};
