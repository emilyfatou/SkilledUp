//load module dependencies
var mongoose = require('mongoose');
var paginator=require('mongoose-paginate');
var Schema = mongoose.Schema;

//define progres schema attribute
var ProgressSchema = new Schema({
    assignment: { type: Schema.Types.ObjectId, ref: 'Assignment' },
    exam: { type: Schema.Types.ObjectId, ref: 'Exam' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    trainee: { type: Schema.Types.ObjectId, ref: 'Trainee' },
    attendance: { type: String, default: 'select' },//present absent
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
ProgressSchema.plugin(paginator);

//export progress module
module.exports = mongoose.model('Progress', ProgressSchema);