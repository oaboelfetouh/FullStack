const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorizatonHeader = req.get('Authorization');
  if (!authorizatonHeader) {
    const error = new Error('Not Authorized.');
    error.status = 401;
    throw error;
  }
  let decodedToken;
  try {
    const token = authorizatonHeader.split(' ')[1];
    decodedToken = jwt.verify(
      token,
      'ThisIsASecretKeyYouShouldNotShareItWithAnyOne'
    );
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not Authorized.');
    error.status = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  req.userType = decodedToken.userType;
  next();
};
