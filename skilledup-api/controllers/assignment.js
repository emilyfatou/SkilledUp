//load module dependencies
var AssignmentDal = require('../dal/assignment');
var debug = require('debug')('skilled-up-api');
var CourseDal = require('../dal/course');
var TraineeDal = require('../dal/trainee');
var events = require('events');

/**create assignment
 * 
 */
exports.createAssignment = function createAssignment(req, res, next) {
  debug('create an assignment');

  var body = req.body;
  var workflow = new events.EventEmitter();

  workflow.on('validateData', function validateData() {
    req.checkBody('title', 'enter the title of the assignment').notEmpty();
    req.checkBody('due_date', 'when is the sumbission date').notEmpty();
    req.checkBody('total_marks', 'what is the total mark of the assignment').notEmpty();
    req.checkBody('content', 'enter assignment content').notEmpty();

    var errs = req.validationErrors();
    if (errs) {
      res.status(400);
      res.json(errs);
    } else {
      workflow.emit('createAssignment');
    }
  });
  workflow.on('createAssignment', function createAssignment() {
    AssignmentDal.create({
      title: body.title,
      due_date: body.due_date,
      total_marks: body.total_marks,
      status: body.status,
      course: body.course,
      trainee: body.trainee,
      content:body.content
    }, function cb(err, assignment) {
      if (err) {
        return next(err);
      }

      res.json(assignment);

    });
  });
  workflow.emit('validateData');
};

/**
 * Get assignment
 */
exports.getAssignment = function getAssignment(req, res, next) {
  debug('getting a assignment');
  var query = { _id: req.params._id };

  AssignmentDal.get(query, function cb(err, assignment) {
    if (err) {
      return next(err);
    }
    // If assignment found return it
    if (assignment) {
      res.json(assignment);
    } else {
      res.status(404);
      res.json({
        error: true,
        message: 'assignment Not Found!',
        status: 404
      });

    }
  });

};
/**
 * Get assignments
 */
exports.getAssignments = function getAssignments(req, res, next) {
  debug('get all assignments');

  AssignmentDal.getCollection({}, function getAssignments(err, assignments) {
    if (err) {
      return next(err);
    }
    res.json(assignments);
  });
};

/**
 * Update assignment
 */
exports.updateAssignment = function updateAssignment(req, res, next) {
  debug('updating assignment:', req.params._id);

  var body = req.body;
  var query = { _id: req.params._id };

  AssignmentDal.update(query, body, function cb(err, assignment) {
    if (err) {
      return next(err);
    }

    res.json(assignment);
  });
};


/**
 * Remove assignments
 */
exports.removeAssignment = function removeAssignment(req, res, next) {
  debug('delete assignment:', req.params._id);

  var query = { _id: req.params._id };
  AssignmentDal.delete(query, function deletecb(err, assignment) {
    if (err) {
      return next(err);
    }
    res.json(assignment || {});
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
  AssignmentDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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