const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes.js');
const passportSetup = require('./config/passport-auth.js');
// set view engine
app.set('view engine', 'ejs');
// set uo routes 
app.use('/auth',authRoutes);
// create home route
app.get('/',(req,res) => {
    res.render('home');
});
app.listen(3000,()=> {
    console.log('app is now running on port 3000');
}); 