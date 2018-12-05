/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sainterp', {
    areasymbol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    interpname: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    interptype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interpdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    interpdesigndate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    interpgendate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    interpmaxreasons: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sacatalogkey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sainterpkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'sainterp'
  });
};
