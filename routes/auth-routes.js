const Router = require('express').Router();
// const {Router} = require('express');
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
Router.get('/google',(req,res) => {
    // code handel with passport
    res.send('auth with google');
});
module.exports = Router;
