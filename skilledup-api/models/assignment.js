//load module dependencies
var mongoose = require('mongoose');
var paginator=require('mongoose-paginate');
var Schema = mongoose.Schema;

//define assignment Schema attributes
var AssignmentSchema = new Schema({
    title: { type: String },
    due_date: { type: String },
    course: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    trainee: [{ type: Schema.Types.ObjectId, ref: 'Trainee' }],
    status: { type: String, default: 'not submitted' }, //submitted not submitted
    total_marks: { type: Number },
    content:{type:String}
    },{
    timestamps:{createdAt:'created_at',updatedAt:'updated_at'}
});
AssignmentSchema.plugin(paginator);

//export assignment module
module.exports=mongoose.model('Assignment',AssignmentSchema);