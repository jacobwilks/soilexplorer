/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - sdvfolder', {
    foldersequence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foldername: {
      type: DataTypes.STRING,
      allowNull: false
    },
    folderdescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    folderkey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parentfolderkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wlupdated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'SYSTEM - sdvfolder'
  });
};
