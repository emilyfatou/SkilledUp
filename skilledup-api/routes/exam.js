//load module dependencies
var express=require('express');
var exam=require('../controllers/exam');

//create router
var router=express.Router();

/**
 * @api {get} /exams/ get  all exams
 * @apiName GetExams
 * @apiGroup Exams
 * 
 * @apiParam {String} id exam id
 * @apiParamExample Request Example:
 *   exams/
 * 
 * @apiSuccess {String} _id Unique exam ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} schedule exam schedule
 * @apiSuccess {Number} score exam score
 * @apiSuccess {String} content exam content question an answer
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 *  [
 *   {
    "_id": "590d2f39f56c0d27c8722f36",
    "updated_at": "2017-05-06T02:04:41.215Z",
    "created_at": "2017-05-06T02:04:41.215Z",
    "schedule": "friday,thursday",
    "score": 40,
    "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
    "__v": 0,
    "trainee": [],
    "course": []
  },
  {
    "_id": "590d2f6abc0f63280d4fa689",
    "updated_at": "2017-05-06T02:05:30.275Z",
    "created_at": "2017-05-06T02:05:30.275Z",
    "schedule": "friday,thursday",
    "score": 40,
    "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
    "__v": 0,
    "trainee": [],
    "course": []
  }
]
 */
router.get('/',exam.getExams);
/**
 * @api {post} /exams/ create exam
 * @apiName CreateExam
 * @apiGroup Exams
 *
 * @apiParam {String} schedule exam schedule
 * @apiParam {Number} score exam score

 * @apiParamExample Request Example:
{
       "schedule":"friday,thursday",
      "score":"40",
      "content":"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu"
      
}
 * 
 * @apiSuccess {String} _id Unique exam ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} schedule exam schedule
 * @apiSuccess {Number} score exam score
 * @apiSuccess {String} content exam content question an answer
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 {
  "_id": "590d2f6abc0f63280d4fa689",
  "updated_at": "2017-05-06T02:05:30.275Z",
  "created_at": "2017-05-06T02:05:30.275Z",
  "schedule": "friday,thursday",
  "score": 40,
  "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
  "__v": 0,
  "trainee": [],
  "course": []
}
*/
router.post('/',exam.createExam);

/**
 * @api {get} /exams/paginate paginate exam records
 * @apiName getByPagination
 * @apiGroup Exams
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/exams/paginate?page=1&per_page=2
 * 
 * @apiSuccessExample Response Example:
 * HTTP/1.1 200 OK
 * 
 * {
  "docs": [
        {
      "_id": "590d2f39f56c0d27c8722f36",
      "updated_at": "2017-05-06T02:04:41.215Z",
      "created_at": "2017-05-06T02:04:41.215Z",
      "schedule": "friday,thursday",
      "score": 40,
      "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
      "__v": 0,
      "trainee": [],
      "course": []
    },
    {
      "_id": "590d2f6abc0f63280d4fa689",
      "updated_at": "2017-05-06T02:05:30.275Z",
      "created_at": "2017-05-06T02:05:30.275Z",
      "schedule": "friday,thursday",
      "score": 40,
      "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
      "__v": 0,
      "trainee": [],
      "course": []
    }
  ],
  "total": 4,
  "limit": 2,
  "page": 1,
  "pages": 2
}
 */ 
 router.get('/paginate', exam.getByPagination);


/**
 * @api {get} /exams/ get exam
 * @apiName getExam
 * @apiGroup Exams
 * 
 * @apiParam {String} id exam id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/exams/590d2f6abc0f63280d4fa689
 * 
 * @apiSuccess {String} _id Unique exam ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} schedule exam schedule
 * @apiSuccess {Number} score exam score
 * @apiSuccess {String} content exam content question an answer
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
  {
  "_id": "590d2f6abc0f63280d4fa689",
  "updated_at": "2017-05-06T02:05:30.275Z",
  "created_at": "2017-05-06T02:05:30.275Z",
  "schedule": "friday,thursday",
  "score": 40,
  "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
  "__v": 0,
  "trainee": [],
  "course": []
}
 */ 
router.get('/:_id',exam.getExam);
 
/**
 * @api {put} /exams/ update an exam
 * @apiName updateExam
 * @apiGroup Exams
 * 
 * @apiParam {String} id exam id
 * @apiParam {String} schedule exam schedule
 * @apiParam {Number} fee exam fee
 * 
 * @apiParamExample Request Example:
 * localhost:8085/exams/590d2f39f56c0d27c8722f36
 * {
       "schedule":"sunday",
      "score":"100"
  }
 *
 * @apiSuccess {String} _id Unique exam ID
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} schedule exam schedule
 * @apiSuccess {Number} score exam score
 * @apiSuccess {String} content exam content question an answer
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * {
  "_id": "590d2f39f56c0d27c8722f36",
  "updated_at": "2017-05-06T02:04:41.215Z",
  "created_at": "2017-05-06T02:04:41.215Z",
  "schedule": "Sunday",
  "score": 100,
  "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
  "__v": 0,
  "trainee": [],
  "course": []
}
 */
router.put('/:_id',exam.updateExam);
/**
 * @api {delete} /exams/ remove an exam
 * @apiName removeExam
 * @apiGroup Exams
 * 
 * @apiParam {String} id exam id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/exams/5904dd021497351cc472ae15
 * 
 * {
  "_id": "590d2f39f56c0d27c8722f36",
  "updated_at": "2017-05-06T02:04:41.215Z",
  "created_at": "2017-05-06T02:04:41.215Z",
  "schedule": "friday,thursday",
  "score": 40,
  "content": "this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu",
  "__v": 0,
  "trainee": [],
  "course": []
}
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {}
 */ 
router.delete('/:_id',exam.noop);

//export router module
module.exports=router;
