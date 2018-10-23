//load module dependencies
var Trainee = require('../models/trainee');

var population = [{

    path: 'profile'

}, {
    path: 'user'
}, {

    path: 'course'

}];

//create trainee
exports.create = function create(traineeData, cb) {

    var traineeModel = new Trainee(traineeData);
    traineeModel.save(function savetrainee(err, data) {
        if (err) {
            return cb(err);
        }
        exports.get({ _id: data._id }, function (err, trainee) {
            if (err) {
                return cb(err);
            }
            cb(null, trainee);
        });
    });
};

//get a trainee
exports.get = function get(query, cb) {
    Trainee.findOne(query).populate(population).exec(function (err, trainee) {
        if (err) {
            return cb(err);
        }
        cb(null, trainee || {});
    });
};

//get all trainees
exports.getCollection = function getCollection(query, cb) {
    Trainee.find(query).populate(population).exec(function getCollection(err, trainees) {
        if (err) {
            return cb(err);
        }
        cb(null, trainees || {});
    });
};

//update a trainee
exports.update = function update(query, updates, cb) {
    Trainee.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, trainee) {
        if (err) {
            return cb(err);
        }
        cb(null, trainee || {});
    });
};

//delete trainee
exports.delete = function deleteItem(query, cb) {
    Trainee.findOne(query).populate(population).exec(function (err, trainee) {
        if (err) {
            return cb(err);
        }
        if (!trainee) {
            return cb(null, {});
        }
        Trainee.remove(function (err) {
            if (err) {
                return cb(err);
            }
            cb(null, trainee);
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
    Trainee.paginate(query, opts, function (err, result) {
        if (err) {
            return cb(err);
        }
        return cb(null, result);
    });
};