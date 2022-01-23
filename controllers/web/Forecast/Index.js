const config    = require('config');
const i18n      = require('i18n');
const moment    = require('moment');
moment.locale('de');

const { performance } = require('perf_hooks');

module.exports = async (req, res) => {
  try{
    res.render('web/Forecast',{
      data:[],
      metrics:{empty:true},
      Numeric:[],
      url:req.protocol+'://'+req.get('host'),
      nonce:'12345',
      session:req.session
    });
  }
  catch(error){
    console.log('Error ',error)
  }
}

