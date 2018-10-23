//LOAD MODULE DEPENDENCIES
var Feedback = require('../models/feedback');

var population = [{

    path: 'course'
}, {
    path: 'trainee'
}];

//create feedback
exports.create = function create(feedbackData, cb) {

    var feedbackModel = new Feedback(feedbackData);
    feedbackModel.save(function savefeedback(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, feedback) {
            if (err) {
                return cb(err);
            }
            cb(null, feedback);
        });
    });
};

//get a feedback
exports.get = function get(query, cb) {
    Feedback.findOne(query).populate(population).exec(function (err, feedback) {
        if (err) {
            return cb(err);
        }
        cb(null, feedback || {});
    });
};

//get all feedbacks
exports.getCollection = function getCollection(query, cb) {
    Feedback.find(query).populate(population).exec(function getCollection(err, feedbacks) {
        if (err) {
            return cb(err);
        }
        cb(null, feedbacks || {});
    });
};

//update a feedback
exports.update = function update(query, updates, cb) {
    Feedback.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, feedback) {
        if (err) {
            return cb(err);
        }
        cb(null, feedback || {});
    });
};

//delete feedback
exports.delete = function deleteItem(query, cb) {
    Feedback.findOne(query).populate(population).exec(function (err, feedback) {
        if (err) {
            return cb(err);
        }
        if (!feedback) {
            return cb(null, {});
        }
        Feedback.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, feedback);
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
  Feedback.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};