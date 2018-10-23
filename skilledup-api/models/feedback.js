//load module dependencies
var mongoose=require('mongoose');
var paginator=require('mongoose-paginate');
var Schema=mongoose.Schema;

//define feedback Schema attributes
var FeedbackSchema=new Schema({
    course:{type:Schema.Types.ObjectId,ref:'Course'},
    trainee:{type:Schema.Types.ObjectId,ref:'Trainee'},
    status:{type:String,default:'select'},//filled not filled
    content:{type:String},
    },{
    timestamps:{createdAt:'created_at',updatedAt:'updated_at'}
});
FeedbackSchema.plugin(paginator);
//export feedback module
module.exports=mongoose.model('Feedback',FeedbackSchema);