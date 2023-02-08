const jwt = require('jsonwebtoken');

module.exports = class Auth {
  static async createToken(PAYLOAD) {
    return new Promise((resolve, reject) => {
      jwt.sign(PAYLOAD, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }, (err, token) => {
        if (err) reject(err);
        else resolve(token);
      });
    });
  }
};
