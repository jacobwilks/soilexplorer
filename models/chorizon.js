/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chorizon', {
    hzname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desgndisc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    desgnmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desgnmasterprime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desgnvert: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdept_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdept_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdept_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdepb_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdepb_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzdepb_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzthk_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzthk_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hzthk_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fraggt10_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fraggt10_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fraggt10_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frag3to10_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frag3to10_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frag3to10_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sieveno4_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno4_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno4_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno10_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno10_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno10_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno40_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno40_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno40_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno200_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno200_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sieveno200_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandtotal_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandtotal_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandtotal_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvc_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvc_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvc_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandco_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandco_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandco_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandmed_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandmed_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandmed_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandfine_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandfine_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandfine_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvf_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvf_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sandvf_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    silttotal_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    silttotal_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    silttotal_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltco_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltco_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltco_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltfine_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltfine_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siltfine_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claytotal_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claytotal_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claytotal_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claysizedcarb_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claysizedcarb_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    claysizedcarb_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    om_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    om_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    om_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbtenthbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbtenthbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbtenthbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbthirdbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbthirdbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbthirdbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbfifteenbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbfifteenbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbfifteenbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbovendry_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbovendry_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dbovendry_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    partdensity: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ksat_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ksat_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ksat_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    awc_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    awc_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    awc_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wtenthbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wtenthbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wtenthbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wthirdbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wthirdbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wthirdbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wfifteenbar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wfifteenbar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wfifteenbar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    wsatiated_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wsatiated_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wsatiated_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lep_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lep_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lep_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ll_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ll_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ll_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pi_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pi_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pi_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aashind_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aashind_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aashind_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kwfact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kffact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    caco3_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caco3_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caco3_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gypsum_l: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gypsum_r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gypsum_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sar_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sar_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sar_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ec_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ec_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ec_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cec7_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cec7_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cec7_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecec_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecec_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ecec_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sumbases_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sumbases_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sumbases_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph1to1h2o_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph1to1h2o_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph1to1h2o_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph01mcacl2_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph01mcacl2_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph01mcacl2_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    freeiron_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    freeiron_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    freeiron_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    feoxalate_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    feoxalate_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    feoxalate_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extracid_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extracid_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extracid_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extral_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extral_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    extral_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aloxalate_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aloxalate_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aloxalate_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pbray1_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pbray1_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pbray1_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poxalate_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poxalate_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    poxalate_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph2osoluble_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph2osoluble_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph2osoluble_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ptotal_l: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ptotal_r: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ptotal_h: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    excavdifcl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    excavdifms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cokey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chkey: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chorizon'
  });
};
