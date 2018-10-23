//load module dependencies
var express=require('express');
var admin=require('../controllers/admin');

//create router
var router=express.Router();
/**
 * @api {get} /admins/paginate pagination
 * @apiName getByPagination
 * @apiGroup Admins
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/admins/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
    {
      "_id": "58f7a65c27545c0308b9c858",
      "updated_at": "2017-04-19T18:03:08.251Z",
      "created_at": "2017-04-19T18:03:08.251Z",
      "profile": {
        "_id": "58f7a65c27545c0308b9c857",
        "user": "58f7a65c27545c0308b9c856",
        "first_name": "abc",
        "last_name": "kyz",
        "__v": 0,
        "admin": "58f7a65c27545c0308b9c858"
      },
      "__v": 0
    },
    {
      "_id": "58f8714af764861f15bc5add",
      "updated_at": "2017-04-20T08:28:58.442Z",
      "created_at": "2017-04-20T08:28:58.442Z",
      "profile": {
        "_id": "58f8714af764861f15bc5adc",
        "user": "58f8714af764861f15bc5adb",
        "first_name": "tamri",
        "last_name": "mesfin",
        "__v": 0,
        "admin": "58f8714af764861f15bc5add"
      },
      "__v": 0
    }
  ],
  "total": 4,
  "limit": 2,
  "page": 1,
  "pages": 2
}
 */
 router.get('/paginate', admin.getByPagination);

/**
 * @api {get} /admins/  get all admins
 * @apiName getAdmins
 * @apiGroup Admins
 * 
 *  @apiParamExample Request Example:
 *   get admins/
 * 
 * @apiSuccess {String} _id Unique admin ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} id profile id
 * @apiSuccess {String} id user id
 * @apiSuccess {String} first_name first name of the admin user
 * @apiSuccess {String} last_name last name of the admin User
 * @apiSuccess {String} admin admin id
 *
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * [{
    "_id": "58f8775bb6001d218e5e6b01",
    "updated_at": "2017-04-20T08:54:51.655Z",
    "created_at": "2017-04-20T08:54:51.655Z",
    "profile": null,
    "__v": 0
  },
  {
    "_id": "5901ae6801e54a15d7bec4dc",
    "updated_at": "2017-04-27T08:40:08.324Z",
    "created_at": "2017-04-27T08:40:08.324Z",
    "profile": {
      "_id": "5901ae6801e54a15d7bec4db",
      "user": "5901ae6801e54a15d7bec4da",
      "first_name": "kamp",
      "last_name": "kmp",
      "phone_number": "+251921405957",
      "__v": 0,
      "admin": "5901ae6801e54a15d7bec4dc",
      "age": 25,
      "country": "ethiopia",
      "sex": "female",
      "education_level": "B.Sc"
    },
    "__v": 0
  }
]
 */
router.get('/',admin.getAdmins);

//export admin router
module.exports=router;