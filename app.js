const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes.js');
const passportSetup = require('./config/passport-auth.js');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
// set view engine
app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[keys.session.cookieKey]
}));
// passport initialize
app.use(passport.initialize());
app.use(passport.session);
// mongodb connection
mongoose.connect(keys.mongodb.dbURI,()=> {
    console.log('connected to mongodb');
});
// set uo routes 
app.use('/auth',authRoutes);
// create home route
app.get('/',(req,res) => {
    res.render('home');
});
app.listen(3000,()=> {
    console.log('app is now running on port 3000');
    
}); 