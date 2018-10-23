// Load Module Dependencies
var FeedbackDal = require('../dal/feedback');
var TraineeDal = require('../dal/trainee');
var debug = require('debug')('skilled-up-api');
var CourseDal = require('../dal/course');

/**create feedback
 * 
 */
exports.createFeedback = function createFeedback(req, res, next) {
  debug('create feedback');

  var body = req.body;

  FeedbackDal.create({
    content: body.content,
    status: body.status,
    trainee: body.trainee,
    course: body.course
  }, function cb(err, feedback) {
    if (err) {
      return next(err);
    }

    res.json(feedback);
  });
};
/**
 * Get feedback
 */
exports.getFeedback = function getFeedback(req, res, next) {
  debug('getting a feedback');
  var query = { _id: req.params._id };

  FeedbackDal.get(query, function cb(err, feedback) {
    if (err) {
      return next(err);
    }
    // If feedback found return it
    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'feedback Not Found!',
        status: 404
      });

    }
  });

};
/**
 * Get feedbacks
 */
exports.getFeedbacks = function getFeedbacks(req, res, next) {
  debug('get all feedbacks');

  FeedbackDal.getCollection({}, function getFeedbacks(err, feedbacks) {
    if (err) {
      return next(err);
    }
    res.json(feedbacks);
  });
};

/**
 * Update feedback
 */
exports.updateFeedback = function updateFeedback(req, res, next) {
  debug('updating feedback:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  FeedbackDal.update(query, body, function cb(err, feedback) {
    if (err) {
      return next(err);
    }

    res.json(feedback);
  });
};


/**
 * Remove feedbacks
 */
exports.removeFeedback = function removeFeedback(req, res, next) {
  debug('delete feedback:', req.params._id);

  var query = { _id: req.params._id };
  FeedbackDal.delete(query, function deletecb(err, feedback) {
    if (err) {
      return next(err);
    }
    res.json(feedback || {});
  });
};

//pagination
exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

  //query all
  var query = {};

  //define page and limit per page
  var page = 1 * req.query.page;
  var limit = 1 * req.query.per_page;
  console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  FeedbackDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
    console.log(queryOpts);
    if (err) {
      return next(err);
    }
    if (!doc) {
      res.status(404);
      res.json({ messge: 'request not found' });
    }
    res.json(doc);
  });
};


// no operation(noop) function
exports.noop = function noop(req, res, next) {
  res.json({
    message: 'To Implemented!'
  });
};