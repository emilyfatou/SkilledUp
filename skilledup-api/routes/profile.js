//load module dependencies
var express = require('express');
var profile = require('../controllers/profile');

//create router
var router = express.Router();

/**
 * @api {get} /profiles/paginate pagination
 * @apiName getByPagination
 * @apiGroup Profiles
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/profiles/paginate?page=1&per_page=3
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58ffe62b11a2a71bfbca395c",
      "user": "58ffe62b11a2a71bfbca395b",
      "first_name": "doji",
      "last_name": "kmp",
      "phone_number": "+2511987456",
      "__v": 0,
      "trainee": {
        "_id": "58ffe62b11a2a71bfbca395d",
        "updated_at": "2017-04-26T00:13:31.229Z",
        "created_at": "2017-04-26T00:13:31.229Z",
        "profile": "58ffe62b11a2a71bfbca395c",
        "__v": 0
      }
    }
  ],
  "total": 1,
  "limit": 3,
  "page": 1,
  "pages": 1
}
 */
router.get('/paginate', profile.getByPagination);
/**
 * @api {get} /profiles/:_id get a profile
 * @apiName getProfile
 * @apiGroup Profiles
 * 
 * @apiParamExample Request Example:
 * localhost:8085/profiles/5901ae6801e54a15d7bec4db
 * 
 * @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} user unique user id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {String} age age of the User
 * @apiSuccess {String} country where the user lives
 * @apiSuccess {String} sex gender of the user
 * @apiSuccess {String} education_level level of eucation

 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {
  "_id": "5901ae6801e54a15d7bec4db",
  "user": "5901ae6801e54a15d7bec4da",
  "first_name": "kamp",
  "last_name": "kmp",
  "phone_number": "+251921405957",
  "__v": 0,
  "admin": {
    "_id": "5901ae6801e54a15d7bec4dc",
    "updated_at": "2017-04-27T08:40:08.324Z",
    "created_at": "2017-04-27T08:40:08.324Z",
    "profile": "5901ae6801e54a15d7bec4db",
    "__v": 0
  },
  "age": 25,
  "country": "ethiopia",
  "sex": "female",
  "education_level": "B.Sc"
}
 */
router.get('/:_id', profile.getProfile);

/**
 * @api {get} /profiles/  get all profiles
 * @apiName getProfiles
 * @apiGroup Profiles
 * 
 * @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} user unique user id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {String} age age of the User
 * @apiSuccess {String} country where the user lives
 * @apiSuccess {String} sex gender of the user
 * @apiSuccess {String} education_level level of eucation
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/profiles/
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 *[
  {
    "_id": "58ffe62b11a2a71bfbca395c",
    "user": "58ffe62b11a2a71bfbca395b",
    "first_name": "doji",
    "last_name": "kmp",
    "phone_number": "+2511987456",
    "__v": 0,
    "trainee": {
      "_id": "58ffe62b11a2a71bfbca395d",
      "updated_at": "2017-04-26T00:13:31.229Z",
      "created_at": "2017-04-26T00:13:31.229Z",
      "profile": "58ffe62b11a2a71bfbca395c",
      "__v": 0
    }
  },
  {
    "_id": "5901ae6801e54a15d7bec4db",
    "user": "5901ae6801e54a15d7bec4da",
    "first_name": "kamp",
    "last_name": "kmp",
    "phone_number": "+251921405957",
    "__v": 0,
    "admin": {
      "_id": "5901ae6801e54a15d7bec4dc",
      "updated_at": "2017-04-27T08:40:08.324Z",
      "created_at": "2017-04-27T08:40:08.324Z",
      "profile": "5901ae6801e54a15d7bec4db",
      "__v": 0
    },
    "age": 25,
    "country": "ethiopia",
    "sex": "female",
    "education_level": "B.Sc"
  }
]
 * 
 */
router.get('/', profile.getProfiles);

/**
 * @api {put} /profiles/:_id update a profile
 * @apiName updateProfile
 * @apiGroup Profiles
 * 
 * @apiParam {String} id profile id
 * @apiParam {String} phone_number user number
 * @apiParam {String} age age of the user
 * @apiParam {String} education_status user level of education
 * @apiParam {String} country where the user lives
 * @apiParam {String} sex the gender of the user

 * 
 * @apiParamExample Request Example:
 * localhost:8085/profiles/58f875fda6e1eb20410e834e 
 * {
	
	"phone_number":"+251921405957",
	"age":"25",
	"country":"ethiopia",
	"sex":"female",
	"education_level":"B.Sc"
  }
 *
* @apiSuccess {String} _id Unique profile ID
 * @apiSuccess {String} user unique user id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} phone_number phone_number of the user
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {String} age age of the User
 * @apiSuccess {String} country where the user lives
 * @apiSuccess {String} sex gender of the user
 * @apiSuccess {String} education_level level of eucation

 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK 
 * 
 * {
  "_id": "58f875fda6e1eb20410e834e",
  "user": "58f875fda6e1eb20410e834d",
  "first_name": "tamri",
  "last_name": "mesfin",
  "__v": 0,
  "phone_number": "+251921405957",
  "age": 25,
  "country": "ethiopia",
  "sex": "female",
  "education_level": "B.Sc"
}
 */
router.put('/:_id', profile.updateProfile);
/**
 * @api {delete} /profiles/  remove profile
 * @apiName removeProfile
 * @apiGroup Profiles
 * 
 * @apiParam {String} id profile id
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/profiles/58f8775bb6001d218e5e6b00
 
 * {
  "_id": "5901ae6801e54a15d7bec4db",
  "user": "5901ae6801e54a15d7bec4da",
  "first_name": "kamp",
  "last_name": "kmp",
  "phone_number": "+251921405957",
  "__v": 0,
  "admin": {
    "_id": "5901ae6801e54a15d7bec4dc",
    "updated_at": "2017-04-27T08:40:08.324Z",
    "created_at": "2017-04-27T08:40:08.324Z",
    "profile": "5901ae6801e54a15d7bec4db",
    "__v": 0
  },
  "age": 25,
  "country": "ethiopia",
  "sex": "female",
  "education_level": "B.Sc"
}
* 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {}
 */
router.delete('/:_id', profile.noop);

//export router module
module.exports = router;
