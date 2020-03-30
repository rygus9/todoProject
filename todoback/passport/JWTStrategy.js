const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
require('dotenv').config();

const { Auth } = require('../models');

module.exports = (passport) => {
    /*ExtractJWT.뒤에 있는 옵션,  내가 쓴 옵션은 header에 Authorization이라는 키이름에
    BearerToken을 전달하는 방식이다.*/
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }, async (jwtPayload, done) => {
        try {
            const exUser = await Auth.findOne({ where: { id: jwtPayload.id } });
            if (exUser) {
                done(null, exUser);
            } else {
                done(null, false, { message: '이게 뭔 토큰인거임?' });
            }
        } catch (e) {
            console.error(error);
            done(error);
        }
    }))
}