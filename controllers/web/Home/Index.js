const config    = require('config');
const i18n      = require('i18n');
const moment    = require('moment');
moment.locale('de');

module.exports = async (req, res) => {
  res.render('web/Home',{
    data:[],
    metrics:{empty:true},
    Numeric:[],
    url:req.protocol+'://'+req.get('host'),
    nonce:'12345',
    session:req.session
  });
}


