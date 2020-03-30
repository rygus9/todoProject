const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');

require('dotenv').config();

const { Auth } = require("../models");

router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('축하합니다. 인증되었습니다.');
});

router.post('/register', (req, res) => {
  const { email, nick, password } = req.body;
  Auth.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: "해당 이메일을 가진 사용자가 존재합니다."
        });
      } else {
        return bcrypt.hash(password, 12);
      }
    })
    .then(hash => {
      return Auth.create({
        email,
        nick,
        hashedpassword: hash
      });
    })
    .then(() => {
      return res.json({ success: true });
    })
    .catch(e => {
      console.error(e);
      return next(e);
    });
});

router.post('/login', (req, res, next) => {
  console.log('오냐');
  //authenticate도 미들웨어다.
  passport.authenticate('local', { session: false }, (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash('loginError', info.message);
      return res.redirect('/');
    }
    req.login(user, { session: false }, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }

      const payload = {
        id: user.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            res.send(error);
          }
          res.json({
            success: true,
            token: 'Bearer ' + token
          })
        });
    });
  })(req, res, next);
});


module.exports = router;
