const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbNail: String
});
const User = mongoose.model('user',userSchema);
module.exports=User;