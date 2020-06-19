const jwt = require("jsonwebtoken");
const constants = require('../config/constants')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = constants.jwtSecret

  if(token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if(error) {
        res.status(401).json({ you: 'shall not pass!' });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    })
  } else {
    res.status(401).json({ message: 'please provide credentials to access this resource'})
  }
};
