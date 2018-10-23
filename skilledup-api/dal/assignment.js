//load module dependencies
var Assignment = require('../models/assignment');

var population = [{
    path: 'course'
}, {
    path: 'trainee'

}];

//create assignment
exports.create = function create(assignmentData, cb) {

    var assignmentModel = new Assignment(assignmentData);
    assignmentModel.save(function saveAssignment(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, assignment) {
            if (err) {
                return cb(err);
            }
            cb(null, assignment);
        });
    });
};

//get a assignment
exports.get = function get(query, cb) {
    Assignment.findOne(query).populate(population).exec(function (err, assignment) {
        if (err) {
            return cb(err);
        }
        cb(null, assignment || {});
    });
};

//get all assignments
exports.getCollection = function getCollection(query, cb) {
    Assignment.find(query).populate(population).exec(function getCollection(err, assignments) {
        if (err) {
            return cb(err);
        }
        cb(null, assignments || {});
    });
};

//update a assignment
exports.update = function update(query, updates, cb) {
    Assignment.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, assignment) {
        if (err) {
            return cb(err);
        }
        cb(null, assignment || {});
    });
};

//delete assignment
exports.delete = function deleteItem(query, cb) {
    Assignment.findOne(query).populate(population).exec(function (err, assignment) {
        if (err) {
            return cb(err);
        }
        if (!assignment) {
            return cb(null, {});
        }
        Assignment.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, assignment);
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
    Assignment.paginate(query, opts, function (err, result) {
        if (err) {
            return cb(err);
        }
        return cb(null, result);
    });
};