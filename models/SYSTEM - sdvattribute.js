/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSTEM - sdvattribute', {
    attributekey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attributename: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    attributetablename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attributecolumnname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attributelogicaldatatype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attributefieldsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attributeprecision: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attributedescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attributeuom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attributeuomabbrev: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attributetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nasisrulename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ruledesign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notratedphrase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mapunitlevelattribflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complevelattribflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cmonthlevelattribflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    horzlevelattribflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tiebreakdomainname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiebreakruleoptionflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tiebreaklowlabel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiebreakhighlabel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiebreakrule: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resultcolumnname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sqlwhereclause: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primaryconcolname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pcclogicaldatatype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primaryconstraintlabel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondaryconcolname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    scclogicaldatatype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondaryconstraintlabel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dqmodeoptionflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    depthqualifiermode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    layerdepthtotop: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    layerdepthtobottom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    layerdepthuom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    monthrangeoptionflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    beginningmonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endingmonth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    horzaggmeth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interpnullsaszerooptionflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interpnullsaszeroflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nullratingreplacementvalue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    basicmodeflag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maplegendkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maplegendclasses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maplegendxml: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nasissiteid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wlupdated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    algorithmname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    componentpercentcutoff: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    readytodistribute: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    effectivelogicaldatatype: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'SYSTEM - sdvattribute'
  });
};
