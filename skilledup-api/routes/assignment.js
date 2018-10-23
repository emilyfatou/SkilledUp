//load module dependencies
var express=require('express');
var assignment=require('../controllers/assignment');

//create router
var router=express.Router();

/**
 * @api {post} /assignments/ create assignment
 * @apiName CreateAssignment
 * @apiGroup Assignments
 *
 * @apiParam {String} title assignment title
 * @apiParam {Number} due_date assignment due date
 * @apiParam {Number} total_marks assignment total marks
 * @apiParam {Number} status assignment status submitted or not submitted
 * 
 * @apiParamExample Request Example:

  {
	"title":"email writing",
      "due_date":"Tuesday",
      "total_marks":"20",
       "content":"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk"
  }
 * 
 * @apiSuccess {String} _id Unique assignment ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} title assignment title
 * @apiSuccess {String} due_date assignment due date
 * @apiSuccess {Number} total_marks assignment total marks
 * @apiSuccess {String} content assignment co
 * @apiSuccess {object} trainee trainee information
 * @apiSuccess {object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 {
  "_id": "590d34f29e91fd2d38d88457",
  "updated_at": "2017-05-06T02:29:06.302Z",
  "created_at": "2017-05-06T02:29:06.302Z",
  "title": "email writing",
  "due_date": "Tuesday",
  "total_marks": 20,
  "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
  "__v": 0,
  "status": "select",
  "trainee": [],
  "course": []
}
*/
router.post('/',assignment.createAssignment);
/**
 * @api {get} /assignments/ get  all assignments
 * @apiName getAssignments
 * @apiGroup Assignments
 * 
   @apiParamExample Request Example:
   *   assignments/
 * 
 * @apiSuccess {String} _id Unique assignment ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} title assignment title
 * @apiSuccess {String} due_date assignment due date
 * @apiSuccess {Number} total_marks assignment total marks
 * @apiSuccess {String} content assignment co
 * @apiSuccess {object} trainee trainee information
 * @apiSuccess {object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *  [
   {
    "_id": "590d34f29e91fd2d38d88457",
    "updated_at": "2017-05-06T02:29:06.302Z",
    "created_at": "2017-05-06T02:29:06.302Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
    "__v": 0,
    "status": "select",
    "trainee": [],
    "course": []
  },
  {
    "_id": "590d3693f8dd192e40837c7f",
    "updated_at": "2017-05-06T02:36:03.619Z",
    "created_at": "2017-05-06T02:36:03.619Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
    "__v": 0,
    "status": "not submitted",
    "trainee": [],
    "course": []
  }
]
 */
router.get('/',assignment.getAssignments);
/**
 * @api {get} /assignments/paginate paginate assignment records
 * @apiName getByPagination
 * @apiGroup Assignments
 * 
 * @apiParamExample Request Example:
 * localhost:8085/assignments/paginate?page=1&per_page=2
 * 
  * @apiSuccess {String} _id Unique assignment ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} title assignment title
 * @apiSuccess {String} due_date assignment due date
 * @apiSuccess {Number} total_marks assignment total marks
 * @apiSuccess {String} content assignment co
 * @apiSuccess {object} trainee trainee information
 * @apiSuccess {object} course course informationn
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
      {
      "_id": "590d34f29e91fd2d38d88457",
      "updated_at": "2017-05-06T02:38:59.680Z",
      "created_at": "2017-05-06T02:29:06.302Z",
      "title": "email writing",
      "due_date": "Tuesday",
      "total_marks": 50,
      "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
      "__v": 0,
      "status": "not submitted",
      "trainee": [],
      "course": []
    },
    {
      "_id": "590d3693f8dd192e40837c7f",
      "updated_at": "2017-05-06T02:36:03.619Z",
      "created_at": "2017-05-06T02:36:03.619Z",
      "title": "email writing",
      "due_date": "Tuesday",
      "total_marks": 20,
      "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
      "__v": 0,
      "status": "not submitted",
      "trainee": [],
      "course": []
    }
  ],
  "total": 7,
  "limit": 2,
  "page": 1,
  "pages": 4
}
 */ 
 router.get('/paginate', assignment.getByPagination);


/**
 * @api {get} /assignments/ get a specific assignment
 * @apiName getAssignment
 * @apiGroup Assignments
 * 
 * @apiParam {String} id assignment id
 * 
  @apiParamExample Request Example:
   * localhost:8085/assignments/590d34f29e91fd2d38d88457
 * 
 * @apiSuccess {String} _id Unique assignment ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} title assignment title
 * @apiSuccess {String} due_date assignment due date
 * @apiSuccess {Number} total_marks assignment total marks
 * @apiSuccess {String} content assignment co
 * @apiSuccess {object} trainee trainee information
 * @apiSuccess {object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
{
  "_id": "590d34f29e91fd2d38d88457",
  "updated_at": "2017-05-06T02:38:59.680Z",
  "created_at": "2017-05-06T02:29:06.302Z",
  "title": "email writing",
  "due_date": "Tuesday",
  "total_marks": 50,
  "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
  "__v": 0,
  "status": "not submitted",
  "trainee": [],
  "course": []
}
 */ 
router.get('/:_id',assignment.getAssignment);
 
/**
 * @api {put} /assignments/ update assignment
 * @apiName updateAssignment
 * @apiGroup Assignments
 * 
 * @apiParam {String} id assignment id
 * @apiParam {Number} total_marks total mark of assignment
 * @apiParam {String} status assignment status submitted or not submitted
 * 
  @apiParamExample Request Example:
   * localhost:8085/assignments/590d34f29e91fd2d38d88457
 * {
       "total_marks":"50",
       "status":"not submitted"
 }
 *
 * @apiSuccess {String} _id Unique assignment ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
* @apiSuccess {String} title assignment title
 * @apiSuccess {String} due_date assignment due date
 * @apiSuccess {Number} total_marks assignment total marks
 * @apiSuccess {String} content assignment co
 * @apiSuccess {object} trainee trainee information
 * @apiSuccess {object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 {
  "_id": "590d34f29e91fd2d38d88457",
  "updated_at": "2017-05-06T02:38:54.930Z",
  "created_at": "2017-05-06T02:29:06.302Z",
  "title": "email writing",
  "due_date": "Tuesday",
  "total_marks": 50,
  "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
  "__v": 0,
  "status": "not submitted",
  "trainee": [],
  "course": []
}
 */
router.put('/:_id',assignment.updateAssignment);
/**
 * @api {delete} /assignments/ remove an assignment
 * @apiName removeAssignment
 * @apiGroup Assignments
 * 
 * @apiParam {String} id assignment id
 * 
 *   @apiParamExample Request Example::
 * localhost:8085/assignments/590d34f29e91fd2d38d88457
 * 
{
  "_id": "590d34f29e91fd2d38d88457",
  "updated_at": "2017-05-06T02:29:06.302Z",
  "created_at": "2017-05-06T02:29:06.302Z",
  "title": "email writing",
  "due_date": "Tuesday",
  "total_marks": 20,
  "content": "this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk",
  "__v": 0,
  "status": "select",
  "trainee": [],
  "course": []
} 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {}
 */ 
router.delete('/:_id',assignment.noop);

//export router module
module.exports=router;
