module.exports = function healthCheck() {
  return (req, res, next) => {
    if (req.path === '/health') {
      res.sendStatus(204);

    } else {
      next();
    }
  };
}