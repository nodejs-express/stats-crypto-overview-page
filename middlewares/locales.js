const i18n = require('i18n')

module.exports = (req, res, next) => {
  req.session.locale = 'en';
  i18n.setLocale('en');
  req.setLocale('en');
  next();
}
