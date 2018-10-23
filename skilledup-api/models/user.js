//load module dependencies
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');
var config = require('../config');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

//define user Schema attributes
var UserSchema = new Schema({
    email: { type: String, index: true, unique: true, required: true },
    password: { type: String },
    role: { type: String, default: 'trainee' }, //trainee,admin,employer
    realm: { type: String, default: 'user' },
    last_login: { type: Date },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
//unique validator
UserSchema.plugin(uniqueValidator);

//pagination
UserSchema.plugin(paginator);

//add presave hook
UserSchema.pre('save', function preSaveHook(next) {
    let model = this;
    //generate salt n store in password db
    bcrypt.genSalt(config.SALT_LENGTH, function genSalt(err, salt) {
        if (err) {
            return next(err);
        }
        //generate hash
        bcrypt.hash(model.password, salt, function hashPasswd(err, hash) {
            if (err) {
                return next(err);
            }
            model.password = hash;//password hashed
            next();
        });
    });
});
//compare pass n hashed pass
UserSchema.methods.checkPassword = function checkPassword(password, cb) {
    bcrypt.compare(password, this.password, function done(err, res) {
        if (err) {
            return cb(err);
        }
        cb(null, res);
    });
};
module.exports = mongoose.model('User', UserSchema);
