function Call(method) {
  return (req, res, next) => method(req, res).catch((e) => next(e));
}

module.exports = {
  Call,
};
