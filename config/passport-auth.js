const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
passport.use(googleStrategy({
    // option for google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}),() => {
    // passport callback function
});