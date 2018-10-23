//load moule dependencies
var ExamDal = require('../dal/exam');
var debug = require('debug')('skilled-up-api');
var CourseDal = require('../dal/course');
var TraineeDal = require('../dal/trainee');

/**create exam
* 
*/
exports.createExam = function createExam(req, res, next) {
  debug('create exam');

  var body = req.body;
  ExamDal.create({
    course: body.course,
    trainee: body.trainee,
    schedule: body.schedule,
    score: body.score,
    content:body.content,
   }, function cb(err, exam) {
    if (err) {
      return next(err);
    }
    res.json(exam);
  });
};

/**
 * Get exam
 */
exports.getExam = function getExam(req, res, next) {
  debug('getting a exam');
  var query = { _id: req.params._id };

  ExamDal.get(query, function cb(err, exam) {
    if (err) {
      return next(err);
    }
    // If exam found return it
    if (exam) {
      res.json(exam);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'exam Not Found!',
        status: 404
      });

    }
  });

};


/**
 * Update exam
 */
exports.updateExam = function updateExam(req, res, next) {
  debug('updating exam:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  ExamDal.update(query, body, function cb(err, exam) {
    if (err) {
      return next(err);
    }

    res.json(exam);
  });
};


/**
 * Remove exams
 */
exports.removeExam = function removeExam(req, res, next) {
  debug('delete exam:', req.params._id);

  var query = { _id: req.params._id };
  ExamDal.delete(query, function deletecb(err, exam) {
    if (err) {
      return next(err);
    }
    res.json(exam || {});
  });
};


/**
 * Get exams
 */
exports.getExams = function getExams(req, res, next) {
  debug('get all exams');

  ExamDal.getCollection({}, function getexams(err, exams) {
    if (err) {
      return next(err);
    }
    res.json(exams);
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
  ExamDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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