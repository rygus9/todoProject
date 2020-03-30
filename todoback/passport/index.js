const local = require('./localStrategy');
const jwt = require('./JWTStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    local(passport);
    jwt(passport);
}