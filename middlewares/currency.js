module.exports = (req, res, next) => {
  if(!req.session.currency)
    req.session.currency = 'USD';
  next();
}
