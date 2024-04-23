module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET , POST , DELETE , PATCH , PUT'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
  next();
};
