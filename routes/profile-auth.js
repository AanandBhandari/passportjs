const Router = require('express').Router();
// cheaking if user is loged in
const authCheak = (req,res,next) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}
Router.get('/',authCheak,(req,res) => {
    res.send(req.user.username);
    // console.log(req);
    // res.send('reached');
});
module.exports = Router;