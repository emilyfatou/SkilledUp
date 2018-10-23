//load module dependencies
var mongoose=require('mongoose');
var paginator=require('mongoose-paginate');
var Schema=mongoose.Schema;

//define Exam Schema attributes
var ExamSchema=new Schema({
    course:[{type:Schema.Types.ObjectId,ref:'Course'}],
    trainee:[{type:Schema.Types.ObjectId,ref:'Trainee'}],
    schedule:{type:String},
    score:{type:Number},
    content:{type:String}
},{
    timestamps:{createdAt:'created_at',updatedAt:'updated_at'}
});
ExamSchema.plugin(paginator);
//export exam module
module.exports=mongoose.model('Exam',ExamSchema);