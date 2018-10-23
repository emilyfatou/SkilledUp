//load module dependencies
var mongoose = require('mongoose');
var paginator=require('mongoose-paginate');

var Schema = mongoose.Schema;

//define trainee schema attribute
var TraineeSchema = new Schema({
    progress: { type: Schema.Types.ObjectId, ref: 'Progress' },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    feedback: { type: Schema.Types.ObjectId, ref: 'Feedback' },
    course:{type:Schema.Types.ObjectId,ref:'Course'}
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

 //pagination
    TraineeSchema.plugin(paginator);
    
//export trainee module
module.exports = mongoose.model('Trainee', TraineeSchema);