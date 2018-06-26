const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
passport.use(
    new googleStrategy({
    // option for google strat
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken,refreshToken,profile,done) => {
    // passport callback function
    console.log(profile);
    console.log('helloworld');
    console.log(accessToken);
    // done(null,profile);
})
);