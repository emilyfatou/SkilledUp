// Load Module Dependencies
var express = require('express');
var user = require('../controllers/user');
var auth = require('../controllers/auth');
var authorize = require('../lib/authorize');

//create router
var router = express.Router();


/**
 * @api {get} /users/ get a all users
 * @apiName getUsers
 * @apiGroup Users
 * 
 * @apiParamExample Request Example:
* http://skilledup-api.ett.gebeya.io/users/ 

 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *[
  {
    "_id": "5901ae6801e54a15d7bec4da",
    "updated_at": "2017-04-27T08:53:52.883Z",
    "created_at": "2017-04-27T08:40:08.181Z",
    "email": "kamp@gmail.com",
    "password": "$2a$07$C2t2gIXZsllimhppwx.XYeNHLTJKkArhoUEhWqrl5bfxjGqJ1AaAS",
    "__v": 0,
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
    "last_login": "2017-04-27T08:53:52.883Z",
    "realm": "user",
    "role": "admin"
  },
  {
    "_id": "5901b5bec7d2231c8e767a78",
    "updated_at": "2017-04-27T09:11:26.560Z",
    "created_at": "2017-04-27T09:11:26.525Z",
    "email": "dani@gmail.com",
    "password": "$2a$07$JMm6UlOg.F.E5iJGJFEiJeNj5Sj8PqrnMl8bhpVkX.QFHEZ1dDCOu",
    "__v": 0,
    "profile": {
      "_id": "5901b5bec7d2231c8e767a79",
      "user": "5901b5bec7d2231c8e767a78",
      "first_name": "kamp",
      "last_name": "kmp",
      "phone_number": "+2511987456",
      "__v": 0,
      "admin": "5901b5bec7d2231c8e767a7a"
    },
    "realm": "user",
    "role": "admin"
  },
  {
    "_id": "5901d8e7ab27f52ea3b2c109",
    "updated_at": "2017-04-27T11:41:27.595Z",
    "created_at": "2017-04-27T11:41:27.512Z",
    "email": "tam@gmail.com",
    "password": "$2a$07$Y2f4x/5iXWrvGn1E8i7I9OJ3JFP8sLDn1q/O2BP.7permL8L5x17G",
    "__v": 0,
    "profile": {
      "_id": "5901d8e7ab27f52ea3b2c10a",
      "user": "5901d8e7ab27f52ea3b2c109",
      "first_name": "gud",
      "last_name": "kmp",
      "phone_number": "+2511987456",
      "__v": 0,
      "trainee": "5901d8e7ab27f52ea3b2c10b"
    },
    "realm": "user",
    "role": "trainee"
  },
  {
    "_id": "5901d927ab27f52ea3b2c10c",
    "updated_at": "2017-04-27T11:42:31.089Z",
    "created_at": "2017-04-27T11:42:31.072Z",
    "email": "tam1@gmail.com",
    "password": "$2a$07$03Ob6BHeuIHaYc0.97VkQuPS1NwOWBSFlATPG4cdTVMFQTzgI7tBe",
    "__v": 0,
    "profile": {
      "_id": "5901d927ab27f52ea3b2c10d",
      "user": "5901d927ab27f52ea3b2c10c",
      "first_name": "gud",
      "last_name": "kmp",
      "phone_number": "+2511987456",
      "__v": 0,
      "admin": "5901d927ab27f52ea3b2c10e"
    },
    "realm": "user",
    "role": "admin"
  }
]
 */
router.get('/', user.getUsers);
/**
 * @api {post} /users/signup user signup
 * @apiName createUser
 * @apiGroup Users
 *
 * @apiParam {String} first_name  First Name
 * @apiParam {String} last_name Last Name
 * @apiParam {String} email Email Address
 * @apiParam {String} password User Password
 * @apiParam {String} user_type User Type - admin or trainee
 * @apiParam {String} phone_number phone_number of the user
 * 
 * @apiParamExample Request Example:
 * http://skilledup-api.ett.gebeya.io/users/signup
 {
	"first_name":"abc",
	"last_name":"kyz",
	"email":"check@gmail.com",
	"password":"longpassword",
	"phone_number":"+251921405957",
	"user_type":"admin"
 }
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 *
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 {
  "_id": "58f7a65c27545c0308b9c856",
  "updated_at": "2017-04-19T18:03:08.215Z",
  "created_at": "2017-04-19T18:03:08.215Z",
  "email": "check@gmail.com",
   "__v": 0,
  "realm": "user",
  "role": "admin"
}
 */
router.post('/signup', user.createUser);
/**
 * @api {get} /users/paginate pagination
 * @apiName getByPagination
 * @apiGroup Users
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/users/paginate?page=1&per_page=3
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time

 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "58f7523fd2d167138fb31e2c",
      "updated_at": "2017-04-19T17:44:35.930Z",
      "created_at": "2017-04-19T12:04:15.071Z",
      "email": "ed@gmail.com",
      "phone_number": "+25123456789",
      "password": "$2a$07$Zu0ui6aL6MIOG56WiYwS/u9OrMc7hVYOdq69livtQ1S7JJFEwbusi",
      "__v": 0,
      "profile": {
        "_id": "58f7523fd2d167138fb31e2d",
        "user": "58f7523fd2d167138fb31e2c",
        "first_name": "ed",
        "last_name": "kyz",
        "__v": 0
      },
      "last_login": "2017-04-19T17:44:35.929Z",
      "realm": "user",
      "role": "trainee"
    },
    {
      "_id": "58f7a2ec9cc8fe7f1987247a",
      "updated_at": "2017-04-20T07:15:22.370Z",
      "created_at": "2017-04-19T17:48:28.605Z",
      "email": "kyz@gmail.com",
      "phone_number": "+251921405957",
      "password": "$2a$07$nWGzsU3QnBOKeOuZ/KKa0Oyxlo0jUlURuWn8DQORd.PhGK/axdTb6",
      "__v": 0,
      "profile": {
        "_id": "58f7a2ec9cc8fe7f1987247b",
        "user": "58f7a2ec9cc8fe7f1987247a",
        "first_name": "abc",
        "last_name": "kyz",
        "__v": 0
      },
      "last_login": "2017-04-20T07:15:22.369Z",
      "realm": "user",
      "role": "trainee"
    },
    {
      "_id": "58f7a65c27545c0308b9c856",
      "updated_at": "2017-04-19T18:03:08.246Z",
      "created_at": "2017-04-19T18:03:08.215Z",
      "email": "check@gmail.com",
      "phone_number": "+251921405957",
      "password": "$2a$07$1x6/08Irrr02qLGSAIN/EufbnOybZL1wyl6npFpxfzmP6zgVtF3kS",
      "__v": 0,
      "profile": {
        "_id": "58f7a65c27545c0308b9c857",
        "user": "58f7a65c27545c0308b9c856",
        "first_name": "abc",
        "last_name": "kyz",
        "__v": 0,
        "admin": "58f7a65c27545c0308b9c858"
      },
      "realm": "user",
      "role": "admin"
    }
  ],
  "total": 8,
  "limit": 3,
  "page": 1,
  "pages": 3
}
 */
router.get('/paginate', user.getByPagination);
/**@api {post} /users/login login
 * @apiName login
 * @apiGroup Users
 * 
  * @apiParam {String} email email address of the user
 * @apiParam {String} password user password
 * 
 * @apiParamExample Request Example:
http://skilledup-api.ett.gebeya.io/users//login

  {
 
    "email":"kamp@gmail.com",
	"password":"longpass"
  } 

 * @apiSuccess {String} token token value
 * @apiSuccess {Object} user user information
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK 
{
  "token": "a7MtASg8A5E1/E3JrjwS",
  "user": {
    "_id": "5901ae6801e54a15d7bec4da",
    "updated_at": "2017-04-27T08:51:19.595Z",
    "created_at": "2017-04-27T08:40:08.181Z",
    "email": "kamp@gmail.com",
    "__v": 0,
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
      "sex": "female"
    },
    "last_login": "2017-04-27T08:51:19.595Z",
    "realm": "user",
    "role": "admin"
  }
}
 */
router.post('/login', auth.login);
/**
 * @api {get} /users/:_id get a specific user
 * @apiName GetUser
 * @apiGroup Users
 * 
 * @apiParamExample Request Example:
 * users/58f71fbe45dfa80cbea9ad95
 * 
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} phone_number user phone number
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *{
  "_id": "5901ae6801e54a15d7bec4da",
  "updated_at": "2017-04-27T08:53:52.883Z",
  "created_at": "2017-04-27T08:40:08.181Z",
  "email": "kamp@gmail.com",
  "password": "$2a$07$C2t2gIXZsllimhppwx.XYeNHLTJKkArhoUEhWqrl5bfxjGqJ1AaAS",
  "__v": 0,
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
  "last_login": "2017-04-27T08:53:52.883Z",
  "realm": "user",
  "role": "admin"
}
 */
router.get('/:_id', user.getUser);



/**
 * @api {put} /users/:_id update a user
 * @apiName updateUser
 * @apiGroup Users
 * 
 * @apiParam {String} id Unique user id
  * @apiParam {String} email Email Address
 * 
 * @apiParamExample Request Example:
 * users/58f71fbe45dfa80cbea9ad95
 * 
 *{
  	"email":"test@gmail.com",
  }
 *
 * @apiSuccess {String} _id Unique User ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} email Email Address
 * @apiSuccess {String} password user password
 * @apiSuccess {Object} profile user profile information
 * @apiSuccess {String} realm User Realm/Group
 * @apiSuccess {String} role User Role
 * @apiSuccess {String} last_login last login time
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK 
 *{
  "_id": "58f71fbe45dfa80cbea9ad95",
  "updated_at": "2017-04-19T11:56:38.995Z",
  "created_at": "2017-04-19T08:28:46.653Z",
  "email": "test@gmail.com",
  "password": "mypass",
  "__v": 0,
  "profile": {
    "_id": "58f71fbe45dfa80cbea9ad96",
    "user": "58f71fbe45dfa80cbea9ad95",
    "first_name": "abc",
    "last_name": "kyz",
    "__v": 0
  },
  "phone_number": "+1112223333",
  "realm": "user",
  "role": "trainee"
}
 */
router.put('/:_id', user.updateUser);

/**@api {delete} /users/:_id remove a specific user
 * @apiName removeUser
 * @apiGroup Users
 * 
 * @apiParam {String} id Unique user id
 * 
 * @apiParamExample Request Example:
 * users/58f71fbe45dfa80cbea9ad95
 * 
 * {
  "_id": "58f71fbe45dfa80cbea9ad95",
  "updated_at": "2017-04-19T11:56:38.995Z",
  "created_at": "2017-04-19T08:28:46.653Z",
  "email": "test@gmail.com",
  "password": "mypass",
  "__v": 0,
  "profile": {
    "_id": "58f71fbe45dfa80cbea9ad96",
    "user": "58f71fbe45dfa80cbea9ad95",
    "first_name": "abc",
    "last_name": "kyz",
    "__v": 0
  },
  "phone_number": "+1112223333",
  "realm": "user",
  "role": "trainee"
}
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK 
 * {}
 * 
 */
router.delete('/:_id', user.noop);

/**@api {post} /users/updatePass/:_id change password
 * @apiName passwordChange
 * @apiGroup Users
 * 
 * @apiParam {String} id Unique user id
 * @apiParam {String} password old password
 * @apiParam {String} new_password the password to be used
 * 
 *  @apiParamExample Request Example:
 * /users/58f7523fd2d167138fb31e2c/updatepass
 * 
 * {
  	"password":"thisismypass",
  	"new_password":"mynewpass"
}
*
* @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK 
*{
  "message": "password changed Sucessfully"
}
*
 */
router.post('/updatePass/:_id', user.passwordChange);


/**@api {post} /users/logout logout
 * @apiName logout
 * @apiGroup Users
 * 
  * @apiParam {String} token token value given when user login
 * 
 * @apiParamExample Request Example:
 * http://skilledup-api.ett.gebeya.io/users//logout
   
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK 
 * {
  "message": "user Logged out successfully"
}
 */
router.post('/logout', auth.logout);


module.exports = router;