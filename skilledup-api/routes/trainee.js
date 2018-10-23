//load module dependencies
var express=require('express');
var trainee=require('../controllers/trainee');

//create router
var router=express.Router();

/**@api {get} /trainees/paginate pagination
 * @apiName getByPagination
 * @apiGroup Trainees
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/trainees/paginate?page=1&per_page=4
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58f6441574247a2632886326",
      "updated_at": "2017-04-18T16:51:33.964Z",
      "created_at": "2017-04-18T16:51:33.964Z",
      "profile": {
        "_id": "58f6441574247a2632886325",
        "user": "58f6441574247a2632886324",
        "first_name": "tamri",
        "last_name": "mesfin",
        "__v": 0
      },
      "__v": 0
    },
    {
      "_id": "58f64499c69f03266efdd3c6",
      "updated_at": "2017-04-18T16:53:45.005Z",
      "created_at": "2017-04-18T16:53:45.005Z",
      "profile": {
        "_id": "58f64498c69f03266efdd3c5",
        "user": "58f64498c69f03266efdd3c4",
        "first_name": "tamri",
        "last_name": "mesfin",
        "__v": 0
      },
      "__v": 0
    },
    {
      "_id": "58f644a91426cd26a0751fdf",
      "updated_at": "2017-04-18T16:54:01.619Z",
      "created_at": "2017-04-18T16:54:01.619Z",
      "profile": {
        "_id": "58f644a91426cd26a0751fde",
        "user": "58f644a91426cd26a0751fdd",
        "first_name": "tamri",
        "last_name": "mesfin",
        "__v": 0
      },
      "__v": 0
    },
    {
      "_id": "58f71fbe45dfa80cbea9ad97",
      "updated_at": "2017-04-19T08:28:46.693Z",
      "created_at": "2017-04-19T08:28:46.693Z",
      "profile": {
        "_id": "58f71fbe45dfa80cbea9ad96",
        "user": "58f71fbe45dfa80cbea9ad95",
        "first_name": "abc",
        "last_name": "kyz",
        "__v": 0
      },
      "__v": 0
    }
  ],
  "total": 10,
  "limit": 4,
  "page": 1,
  "pages": 3
}
 */
 router.get('/paginate', trainee.getByPagination);

/**
 * @api {get} /trainees/ get all trainees
 * @apiName getTrainees
 * @apiGroup Trainees
 * 
 * @apiParamExample Request Example:
 *  get /trainees
 * 
 * @apiSuccess {String} _id Unique trainee ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} profile user profile information 
 *
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *  [
 * {
    "_id": "58f723a5de63360eb77edf28",
    "updated_at": "2017-04-19T08:45:25.484Z",
    "created_at": "2017-04-19T08:45:25.484Z",
    "profile": {
      "_id": "58f723a5de63360eb77edf27",
      "user": "58f723a5de63360eb77edf26",
      "first_name": "sam",
      "last_name": "kyz",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "58f7523fd2d167138fb31e2e",
    "updated_at": "2017-04-19T12:04:15.114Z",
    "created_at": "2017-04-19T12:04:15.114Z",
    "profile": {
      "_id": "58f7523fd2d167138fb31e2d",
      "user": "58f7523fd2d167138fb31e2c",
      "first_name": "ed",
      "last_name": "kyz",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "58f7a2ec9cc8fe7f1987247c",
    "updated_at": "2017-04-19T17:48:28.690Z",
    "created_at": "2017-04-19T17:48:28.690Z",
    "profile": {
      "_id": "58f7a2ec9cc8fe7f1987247b",
      "user": "58f7a2ec9cc8fe7f1987247a",
      "first_name": "abc",
      "last_name": "kyz",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "58f85daa2e32c00fe7187719",
    "updated_at": "2017-04-20T07:05:14.299Z",
    "created_at": "2017-04-20T07:05:14.299Z",
    "profile": {
      "_id": "58f85daa2e32c00fe7187718",
      "user": "58f85daa2e32c00fe7187717",
      "first_name": "tamri",
      "last_name": "mesfin",
      "__v": 0
    },
    "__v": 0
  }
  ]
 */
router.get('/',trainee.getTrainees);

//export admin router
module.exports=router;