//load moddule dependencies
var Exam = require('../models/exam');

var population = [{

    path: 'course'
}, {
    path: 'trainee'

}];

//create exam
exports.create = function create(examData, cb) {

    var examModel = new Exam(examData);
    examModel.save(function saveExam(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, exam) {
            if (err) {
                return cb(err);
            }
            cb(null, exam);
        });
    });
};

//get a exam
exports.get = function get(query, cb) {
    Exam.findOne(query).populate(population).exec(function (err, exam) {
        if (err) {
            return cb(err);
        }
        cb(null, exam || {});
    });
};

//get all exams
exports.getCollection = function getCollection(query, cb) {
    Exam.find(query).populate(population).exec(function getCollection(err, exams) {
        if (err) {
            return cb(err);
        }
        cb(null, exams || {});
    });
};

//update a exam
exports.update = function update(query, updates, cb) {
    Exam.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, exam) {
        if (err) {
            return cb(err);
        }
        cb(null, exam || {});
    });
};

//delete exam
exports.delete = function deleteItem(query, cb) {
    Exam.findOne(query).populate(population).exec(function (err, exam) {
        if (err) {
            return cb(err);
        }
        if (!exam) {
            return cb(null, {});
        }
        Exam.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, exam);
        });
    });
};

//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

    var opts = {
        populate: population,
        page: queryOpts.page,
        limit: queryOpts.limit
    };
    Exam.paginate(query, opts, function (err, result) {
        if (err) {
            return cb(err);
        }
        return cb(null, result);
    });
};