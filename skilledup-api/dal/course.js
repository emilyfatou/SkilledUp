//load moddule dependencies
var Course = require('../models/course');

var population = [{

    path: 'exam'
}, {
    path: 'trainee'
},{
    path:'assignment'
}];

//create course
exports.create = function create(courseData, cb) {

    var courseModel = new Course(courseData);
    courseModel.save(function savecourse(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, course) {
            if (err) {
                return cb(err);
            }
            cb(null, course);
        });
    });
};

//get a course
exports.get = function get(query, cb) {
    Course.findOne(query).populate(population).exec(function (err, course) {
        if (err) {
            return cb(err);
        }
        cb(null, course || {});
    });
};

//get all courses
exports.getCollection = function getCollection(query, cb) {
    Course.find(query).populate(population).exec(function getCollection(err, courses) {
        if (err) {
            return cb(err);
        }
        cb(null, courses || {});
    });
};

//update a course
exports.update = function update(query, updates, cb) {
    Course.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, course) {
        if (err) {
            return cb(err);
        }
        cb(null, course || {});
    });
};

//delete course
exports.delete = function deleteItem(query, cb) {
    Course.findOne(query).populate(population).exec(function (err, course) {
        if (err) {
            return cb(err);
        }
        if (!course) {
            return cb(null, {});
        }
        Course.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, course);
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
  Course.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};