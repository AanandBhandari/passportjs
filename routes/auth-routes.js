const Router = require('express').Router();
// const {Router} = require('express');
const passport = require('passport');
// auth login
Router.get('/login', (req,res)=> {
    res.render('login');
});
// auth logout
Router.get('/logout',(req,res) => {
    // code handel with passport
    res.send('logout route');
});
// auth with google
Router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
// callback route for google to redirect
Router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    res.send('you have reached to the callback..');
});
module.exports = Router;
