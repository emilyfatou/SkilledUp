//load module dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

//define profile Schema attributes
var ProfileSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: String },
    education_level: { type: String },
    country: { type: String },
    trainee: { type: Schema.Types.ObjectId, ref: 'Trainee' },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
        timeStamps: { createdAt: 'created_at', updatedAt: 'updated_at' }

    });

//add pagination plugin
ProfileSchema.plugin(paginator);

//expotr profile module
module.exports = mongoose.model('Profile', ProfileSchema);