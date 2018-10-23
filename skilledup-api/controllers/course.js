//load module dependencies
var debug = require('debug')('skilled-up-api');
var CourseDal = require('../dal/course');
var TraineeDal = require('../dal/trainee');
var events = require('events');

/**create a course
 * 
 */
exports.createCourse = function createCourse(req, res, next) {
  debug('creating a course');

  var body = req.body;
  var workflow = new events.EventEmitter();

  workflow.on('validateData', function validateData() {
    req.checkBody('course_code', 'enter course course code').notEmpty();
    req.checkBody('course_title', 'enter course title').notEmpty();
    req.checkBody('syllabus', 'enter course syllabus').notEmpty();
    req.checkBody('description', 'enter course description').notEmpty();
    req.checkBody('course_material', 'please specify course material').notEmpty();
    req.checkBody('avatar', 'specify avatar for this course');
 
    var errs = req.validationErrors();
    if (errs) {
      res.status(400);
      res.json(errs);
    } else {
      workflow.emit('createCourse');
    }
  });
  workflow.on('createCourse', function createCourse() {
    CourseDal.create({

      course_code: body.course_code,
      course_title: body.course_title,
      syllabus: body.syllabus,
      description: body.description,
      trainee: body.trainee,
      course_material: body.course_material,
      avatar: body.avatar

    }, function cb(err, course) {
      if (err) {
        return next(err);
      }

      res.json(course);

    });
  });
  workflow.emit('validateData');
};

/**
 * Get course
 */
exports.getCourse = function getCourse(req, res, next) {
  debug('getting a course');
  var query = { _id: req.params._id };

  CourseDal.get(query, function cb(err, course) {
    if (err) {
      return next(err);
    }
    // If course found return it
    if (course) {
      res.json(course);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'course Not Found!',
        status: 404
      });

    }
  });

};
/**
 * Get courses
 */
exports.getCourses = function getCourses(req, res, next) {
  debug('get all courses');

  CourseDal.getCollection({}, function getCourses(err, courses) {
    if (err) {
      return next(err);
    }
    res.json(courses);
  });
};

/**
 * Update course
 */
exports.updateCourse = function updateCourse(req, res, next) {
  debug('updating course:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  CourseDal.update(query, body, function cb(err, course) {
    if (err) {
      return next(err);
    }

    res.json(course);
  });
};


/**
 * Remove courses
 */
exports.removeCourse = function removeCourse(req, res, next) {
  debug('delete course:', req.params._id);

  var query = { _id: req.params._id };
  CourseDal.delete(query, function deletecb(err, course) {
    if (err) {
      return next(err);
    }
    res.json(course || {});
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
  CourseDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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
