const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
const User = require('../models/user-models.js');
passport.serializeUser((user,done) => {
    done(null,user.id);
});
passport.deserializeUser((id,done) => {
    User.findById(id).then((user)=> {
        done(null,user);
    });
    
});
passport.use(
    new googleStrategy({
    // option for google strat
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken,refreshToken,profile,done) => {
    // passport callback function
    // cheak user if already exist in db
    User.findOne({googleId: profile.id}).then((currentUser)=>{
        if (currentUser) {
            console.log('user is:',currentUser);
            done(null,currentUser);
        } else {
            new User({ 
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log('new user added',newUser);
                done(null,newUser);
            });
        }
    });
    
    // console.log(accessToken);
    // done(null,profile);
})
);