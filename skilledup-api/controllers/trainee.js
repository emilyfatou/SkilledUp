// Load Module Dependencies
var TraineeDal  = require('../dal/trainee');
var debug=require('debug')('skilled-up-api');

/**
 * Get all trainee users
 */
exports.getTrainees = function getTrainees(req, res, next) {
   TraineeDal.getCollection({}, function getTrainees(err, trainees) {
    if (err) {
      return next(err);
    }
    res.json(trainees);
  });
};
//pagination
exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

//query all
  var query = {};

  //define page and limit per page
  var page = 1*req.query.page;
  var limit = 1*req.query.per_page;
console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  TraineeDal.getCollectionByPagination(query, queryOpts, function getByPagination(err,doc){
    console.log(queryOpts);
    if(err){
      return next(err);
    }
    if(!doc){
      res.status(404);
      res.json({messge:'request not found'});
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