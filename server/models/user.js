// Initialize mongoose and passport-local-mongoose
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

//create a model class
let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
        dislayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
        },
        created:
        {
            type: Date,
            default: Date.now,
        },
        update:
        {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: "users"
    }
);

//configure options for User Model
let options = ({ missingPasswordError: 'Wrong / Missing Password' });
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);


 