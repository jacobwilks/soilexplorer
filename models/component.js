/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('component', {
    comppct_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comppct_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comppct_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    compname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    compkind: {
      type: DataTypes.STRING,
      allowNull: true
    },
    majcompflag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherph: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localphase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slope_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    slope_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    slope_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    slopelenusle_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slopelenusle_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slopelenusle_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    runoff: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tfact: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wei: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    erocl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    earthcovkind1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    earthcovkind2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hydricon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hydricrating: {
      type: DataTypes.STRING,
      allowNull: true
    },
    drainagecl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    elev_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    elev_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    elev_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aspectccwise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aspectrep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aspectcwise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    geomdesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    albedodry_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    albedodry_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    albedodry_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    airtempa_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    airtempa_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    airtempa_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    map_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    map_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    map_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reannualprecip_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reannualprecip_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reannualprecip_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffd_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffd_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ffd_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nirrcapcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nirrcapscl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nirrcapunit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    irrcapcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    irrcapscl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    irrcapunit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cropprodindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    constreeshrubgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wndbrksuitgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rsprod_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rsprod_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rsprod_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    foragesuitgrpid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlgrain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlgrass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlherbaceous: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlshrub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlconiferous: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlhardwood: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlwetplant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlshallowwat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlrangeland: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlopenland: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlwoodland: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wlwetland: {
      type: DataTypes.STRING,
      allowNull: true
    },
    soilslippot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    frostact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    initsub_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    initsub_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    initsub_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalsub_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalsub_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalsub_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hydgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    corcon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    corsteel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxclname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxorder: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxsuborder: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxgrtgroup: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxsubgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxpartsize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxpartsizemod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxceactcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxreaction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxtempcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxmoistscl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taxtempregime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    soiltaxedition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    castorieindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flecolcomnum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flhe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flphe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flsoilleachpot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flsoirunoffpot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fltemik2use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fltriumph2use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indraingrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    innitrateleachi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    misoimgmtgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vasoimgtgrp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mukey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'component'
  });
};
