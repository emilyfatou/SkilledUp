//load module dependencies
var debug = require('debug')('skilled-up-api');
var ProgressDal = require('../dal/progress');
var TraineeDal = require('../dal/trainee');
var ExamDal = require('../dal/exam');
var AssignmentDal = require('../dal/assignment');
var CourseDal = require('../dal/course');

/**create progress
 * 
 */
exports.createProgress = function createProgress(req, res, next) {
  debug('create progress');

  var body = req.body;
  ProgressDal.create({
    attendance: body.attendance,
    trainee: body.trainee,
    course: body.course,
    exam: body.exam,
    assignment: body.assignment

  }, function cb(err, progress) {
    if (err) {
      return next(err);
    }
    // TraineeDal.update({_id:trainee._id},{$set:{progress:progress._id}},function updatecb(err,trainee){
    //   if(err){
    //     return next(err);
    //   }
    res.json(progress);
    //});
  });
};

/**
 * Get progress
 */
exports.getProgress = function getProgress(req, res, next) {
  debug('getting a progress');

  var query = { _id: req.params._id };

  ProgressDal.get(query, function cb(err, progress) {
    if (err) {
      return next(err);
    }
    // If progress found return it
    if (progress) {
      res.json(progress);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'progress Not Found!',
        status: 404
      });

    }
  });

};


/**
 * Update progress
 */
exports.updateProgress = function updateProgress(req, res, next) {
  debug('updating progress:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  ProgressDal.update(query, body, function cb(err, progress) {
    if (err) {
      return next(err);
    }

    res.json(progress);
  });
};


/**
 * Remove progresss
 */
exports.removeProgress = function removeProgress(req, res, next) {
  debug('delete progress:', req.params._id);

  var query = { _id: req.params._id };
  ProgressDal.delete(query, function deletecb(err, progress) {
    if (err) {
      return next(err);
    }
    res.json(progress || {});
  });
};


/**
 * Get progresss
 */
exports.getProgresses = function getProgresses(req, res, next) {
  debug('get all progresss');

  ProgressDal.getCollection({}, function getProgresses(err, progresses) {
    if (err) {
      return next(err);
    }
    res.json(progresses);
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
  ProgressDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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