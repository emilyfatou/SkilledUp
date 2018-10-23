//load module dependencies
var Progress = require('../models/progress');
var population = [{
    
    path: 'exam'
}, {
    path: 'course'
}, {
    path: 'trainee'
}, {
    path: 'assignment'

}];

//create progress
exports.create = function create(progressData, cb) {

    var progressModel = new Progress(progressData);
    progressModel.save(function saveprogress(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, progress) {
            if (err) {
                return cb(err);
            }
            cb(null, progress);
        });
    });
};

//get a progress
exports.get = function get(query, cb) {
    Progress.findOne(query).populate(population).exec(function (err, progress) {
        if (err) {
            return cb(err);
        }
        cb(null, progress || {});
    });
};

//get all progresss
exports.getCollection = function getCollection(query, cb) {
    Progress.find(query).populate(population).exec(function getCollection(err, progresss) {
        if (err) {
            return cb(err);
        }
        cb(null, progresss || {});
    });
};

//update a progress
exports.update = function update(query, updates, cb) {
    Progress.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, progress) {
        if (err) {
            return cb(err);
        }
        cb(null, progress || {});
    });
};

//delete progress
exports.delete = function deleteItem(query, cb) {
    Progress.findOne(query).populate(population).exec(function (err, progress) {
        if (err) {
            return cb(err);
        }
        if (!progress) {
            return cb(null, {});
        }
        Progress.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, progress);
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
  Progress.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};