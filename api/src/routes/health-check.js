module.exports = (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write("Ok");
  res.end(undefined);
};
