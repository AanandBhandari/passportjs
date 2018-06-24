const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
passport.use(
    new googleStrategy({
    // option for google strat
    callbackURL: 'auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
},() => {
    // passport callback function
})
);