const express = require('express');
const router  = express.Router();

const mwLocales  = require('../middlewares/locales');
const mwCurrency = require('../middlewares/currency');

const mw = [mwLocales,mwCurrency];

// home
router.get('/:language([a-z]{2,3})?',mw,require('../controllers/web/Home/Index'));
// forecast
router.get(__l('routes.forecast'),mw,require('../controllers/web/Forecast/Index'));

module.exports = router;
