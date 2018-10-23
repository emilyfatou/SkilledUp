//load module dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Schema = mongoose.Schema;

///DEFINE COURSE SCHEMA ATTRIBUTES
var CourseSchema = new Schema({

    description: { type: String },
    course_code: { type: String },
    course_title: { type: String },
    syllabus: { type: String },
    trainee: [{ type: Schema.Types.ObjectId, ref: 'Trainee' }],
    avatar: { type: String },
    course_material: [{ type: String }],
}, {
        timestamps: { createdAt: 'created_at', upatedAT: 'updated_at' }
    });
CourseSchema.plugin(paginator);
//export course moddule
module.exports = mongoose.model('Course', CourseSchema);
