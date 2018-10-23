//load module dependencies
var express=require('express');
var course=require('../controllers/course');

//create router
var router=express.Router();

/**
 * @api {get} /courses/ get  all courses
 * @apiName Getcourses
 * @apiGroup Courses
 * 
 * @apiParam {String} id course id
 * @apiParamExample Request Example:
 *   courses/
 * 
 * @apiSuccess {String} _id unique course id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} course_title  title of the course
 * @apiSuccess {String} syllabus course summary
 * @apiSuccess {String} description course description about the course
 * @apiSuccess {String} course_code course code given
 * @apiSuccess {String} course_material course material video materials
 * @apiSuccess {String} avatar course avatar
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *  [
 *   {
    "_id": "590d25e0debe8e2076ff37f3",
    "updatedAt": "2017-05-06T01:24:48.882Z",
    "created_at": "2017-05-06T01:24:48.882Z",
    "course_code": "c001",
    "course_title": "introduction commuincation english",
    "syllabus": "This course covers basic nglish grammare and communication",
    "description": "this is a dummy course desctiptio,u dnt need to continue reading",
    "avatar": "",
    "__v": 0,
    "course_material": [
      "file:///home/tamri/projects/skilled-up-api/docs/index.html"
    ],
    "trainee": []
  },
  {
    "_id": "590d27f9a2e8ba2210f2539f",
    "updatedAt": "2017-05-06T01:33:45.344Z",
    "created_at": "2017-05-06T01:33:45.344Z",
    "course_code": "B021",
    "course_title": "introduction to businee principles",
    "syllabus": "This course covers basic business principles",
    "description": "this is a dummy course desctiptio,u dnt need to continue reading",
    "avatar": "",
    "__v": 0,
    "course_material": [
      "file:///home/tamri/projects/skilled-up-api/docs/index.html"
    ],
    "trainee": []
  }
]
 */
router.get('/',course.getCourses);
/**
 * @api {post} /courses/ create a course
 * @apiName Createcourse
 * @apiGroup Courses
 *
 * @apiParam {String} course_title  title of the course
 * @apiParam {String} syllabus course summary
 * @apiParam {String} description course description about the course
 * @apiParam {String} course_code course code given
 * @apiParam {String} course_material course material video materials
 * @apiParam {String} avatar course avatar

 * @apiParamExample Request Example:
{
    	"course_code":"c001",
      "course_title":"introduction commuincation english",
      "syllabus":"This course covers basic nglish grammare and communication",
      "description":"this is a dummy course desctiptio,u dnt need to continue reading",
      "course_material":"file:///home/tamri/projects/skilled-up-api/docs/index.html",
      "avatar":""
}
 * 
 * @apiSuccess {String} _id unique course id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
*  @apiSuccess {String} course_title  title of the course
 * @apiSuccess {String} syllabus course summary
 * @apiSuccess {String} description course description about the course
 * @apiSuccess {String} course_code course code given
 * @apiSuccess {String} course_material course material video materials
 * @apiSuccess {String} avatar course avatar
 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
{
  "_id": "590d25e0debe8e2076ff37f3",
  "updatedAt": "2017-05-06T01:24:48.882Z",
  "created_at": "2017-05-06T01:24:48.882Z",
  "course_code": "c001",
  "course_title": "introduction commuincation english",
  "syllabus": "This course covers basic nglish grammare and communication",
  "description": "this is a dummy course desctiptio,u dnt need to continue reading",
  "avatar": "",
  "__v": 0,
  "course_material": [
    "file:///home/tamri/projects/skilled-up-api/docs/index.html"
  ],
  "trainee": []
}
*/
router.post('/',course.createCourse);

/**
 * @api {get} /courses/paginate paginate course records
 * @apiName getByPagination
 * @apiGroup Courses
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/courses/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
        {
      "_id": "590d25e0debe8e2076ff37f3",
      "updatedAt": "2017-05-06T01:42:48.169Z",
      "created_at": "2017-05-06T01:24:48.882Z",
      "course_code": "mm023",
      "course_title": "introduction commuincation english",
      "syllabus": "This course covers basic nglish grammare and communication",
      "description": "this is a dummy course desctiptio,u dnt need to continue reading",
      "avatar": "",
      "__v": 0,
      "course_material": [
        "localhost:8085/courses/590d25e0debe8e2076ff37f3"
      ],
      "trainee": []
    },
    {
      "_id": "590d27f9a2e8ba2210f2539f",
      "updatedAt": "2017-05-06T01:33:45.344Z",
      "created_at": "2017-05-06T01:33:45.344Z",
      "course_code": "B021",
      "course_title": "introduction to businee principles",
      "syllabus": "This course covers basic business principles",
      "description": "this is a dummy course desctiptio,u dnt need to continue reading",
      "avatar": "",
      "__v": 0,
      "course_material": [
        "file:///home/tamri/projects/skilled-up-api/docs/index.html"
      ],
      "trainee": []
    }
  ],
  "total": 12,
  "limit": 2,
  "page": 1,
  "pages": 6
}
 */ 
 router.get('/paginate', course.getByPagination);


/**
 * @api {get} /courses/ get a course
 * @apiName Getcourse
 * @apiGroup Courses
 * 
 * @apiParam {String} id course id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/courses/590d25e0debe8e2076ff37f3
 * 
 * @apiSuccess {String} _id unique course id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
*  @apiSuccess {String} course_title  title of the course
 * @apiSuccess {String} syllabus course summary
 * @apiSuccess {String} description course description about the course
 * @apiSuccess {String} course_code course code given
 * @apiSuccess {String} course_material course material video materials
 * @apiSuccess {String} avatar course avata
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
{
  "_id": "590d25e0debe8e2076ff37f3",
  "updatedAt": "2017-05-06T01:24:48.882Z",
  "created_at": "2017-05-06T01:24:48.882Z",
  "course_code": "c001",
  "course_title": "introduction commuincation english",
  "syllabus": "This course covers basic nglish grammare and communication",
  "description": "this is a dummy course desctiptio,u dnt need to continue reading",
  "avatar": "",
  "__v": 0,
  "course_material": [
    "file:///home/tamri/projects/skilled-up-api/docs/index.html"
  ],
  "trainee": []
}
 */ 
router.get('/:_id',course.getCourse);
 
/**
 * @api {put} /courses/ update a course
 * @apiName updateCourse
 * @apiGroup Courses
 * 
 * @apiParam {String} id course id
 * @apiParam {String} schedule course schedule
 * @apiParam {String} fee course fee
 * 
 * @apiParamExample Request Example:
 * localhost:8085/courses/590d25e0debe8e2076ff37f3
 {
         "course_material":"localhost:8085/courses/590d25e0debe8e2076ff37f3",
         "course_code":"mm023"
}
 *
 * @apiSuccess {String} _id unique course id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
*  @apiSuccess {String} course_title  title of the course
 * @apiSuccess {String} syllabus course summary
 * @apiSuccess {String} description course description about the course
 * @apiSuccess {String} course_code course code given
 * @apiSuccess {String} course_material course material video materials
 * @apiSuccess {String} avatar course avata
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
{
  "_id": "590d25e0debe8e2076ff37f3",
  "updatedAt": "2017-05-06T01:42:43.975Z",
  "created_at": "2017-05-06T01:24:48.882Z",
  "course_code": "mm023",
  "course_title": "introduction commuincation english",
  "syllabus": "This course covers basic nglish grammare and communication",
  "description": "this is a dummy course desctiptio,u dnt need to continue reading",
  "avatar": "",
  "__v": 0,
  "course_material": [
    "localhost:8085/courses/590d25e0debe8e2076ff37f3"
  ],
  "trainee": []
}
 */
router.put('/:_id',course.updateCourse);
/**
 * @api {delete} /courses/ remove a course
 * @apiName removeCourse
 * @apiGroup Courses
 * 
 * @apiParam {String} id course id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/courses/590d25e0debe8e2076ff37f3
 * 
{
  "_id": "590d25e0debe8e2076ff37f3",
  "updatedAt": "2017-05-06T01:24:48.882Z",
  "created_at": "2017-05-06T01:24:48.882Z",
  "course_code": "c001",
  "course_title": "introduction commuincation english",
  "syllabus": "This course covers basic nglish grammare and communication",
  "description": "this is a dummy course desctiptio,u dnt need to continue reading",
  "avatar": "",
  "__v": 0,
  "course_material": [
    "file:///home/tamri/projects/skilled-up-api/docs/index.html"
  ],
  "trainee": []
}
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {}
 */ 
router.delete('/:_id',course.noop);

//export router module
module.exports=router;
