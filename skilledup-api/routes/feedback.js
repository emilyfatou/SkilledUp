//load module dependencies
var express=require('express');
var feedback=require('../controllers/feedback');

//create router
var router=express.Router();

 
/**
 * @api {post} /feedbacks/  create a feedback record
 * @apiName createFeedback
 * @apiGroup Feedbacks
 *  
 * @apiParam {String} content Feedback content
 * @apiParam {String} status Feedback status filled or notfilled
  
 *  @apiParamExample Request Example:
 *    {
	     "content":"this is the feedback form for spoken english course",
        "status":"filled"
     }
 * 
 * localhost:8085/feedbacks/
 * 
 * @apiSuccess {String} _id unique feedback id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} content  feedback content
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {String} status feedback status filled or not filled
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 *{
  "_id": "5905096d5d088041213b3b2a",
  "updated_at": "2017-04-29T21:45:17.992Z",
  "created_at": "2017-04-29T21:45:17.992Z",
  "content": "this is the feedback form for spoken english course",
  "trainee": {
    "_id": "5901d8e7ab27f52ea3b2c10b",
    "updated_at": "2017-04-27T11:41:27.600Z",
    "created_at": "2017-04-27T11:41:27.600Z",
    "profile": "5901d8e7ab27f52ea3b2c10a",
    "__v": 0
  },
  "course": {
    "_id": "5904d9da85b6261a7b4e5630",
    "updatedAt": "2017-04-29T18:22:18.714Z",
    "created_at": "2017-04-29T18:22:18.714Z",
    "credit_hours": 3,
    "prerequisite": "english",
    "schedule": "friday,thursday",
    "fee": "50$",
    "__v": 0,
    "trainee": [],
    "progress": [],
    "type": {
      "soft_skills": "business attire"
    }
  },
  "__v": 0,
  "status": "filled"
} 
 */
router.post('/',feedback.createFeedback);

/**
 * @api {get} /feedbacks/paginate  get feedback record by pagination
 * @apiName getByPagination
 * @apiGroup Feedbacks
 *  
 *  @apiParamExample Request Example:
 * localhost:8085/feedbacks/paginate?page=1&per_page=3
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * {
  "docs": [
 * {
      "_id": "5905096d5d088041213b3b2a",
      "updated_at": "2017-04-29T21:45:17.992Z",
      "created_at": "2017-04-29T21:45:17.992Z",
      "content": "this is the feedback form for spoken english course",
      "trainee": {
        "_id": "5901d8e7ab27f52ea3b2c10b",
        "updated_at": "2017-04-27T11:41:27.600Z",
        "created_at": "2017-04-27T11:41:27.600Z",
        "profile": "5901d8e7ab27f52ea3b2c10a",
        "__v": 0
      },
      "course": {
        "_id": "5904d9da85b6261a7b4e5630",
        "updatedAt": "2017-04-29T18:22:18.714Z",
        "created_at": "2017-04-29T18:22:18.714Z",
        "credit_hours": 3,
        "prerequisite": "english",
        "schedule": "friday,thursday",
        "fee": "50$",
        "__v": 0,
        "trainee": [],
        "progress": [],
        "type": {
          "soft_skills": "business attire"
        }
      },
      "__v": 0,
      "status": "filled"
    },
    {
      "_id": "590509ff9c1a9141c9fc485f",
      "updated_at": "2017-04-29T21:47:43.677Z",
      "created_at": "2017-04-29T21:47:43.677Z",
      "content": "this is the feedback form for busines attire course",
      "trainee": {
        "_id": "5901d8e7ab27f52ea3b2c10b",
        "updated_at": "2017-04-27T11:41:27.600Z",
        "created_at": "2017-04-27T11:41:27.600Z",
        "profile": "5901d8e7ab27f52ea3b2c10a",
        "__v": 0
      },
      "course": {
        "_id": "5904d9da85b6261a7b4e5630",
        "updatedAt": "2017-04-29T18:22:18.714Z",
        "created_at": "2017-04-29T18:22:18.714Z",
        "credit_hours": 3,
        "prerequisite": "english",
        "schedule": "friday,thursday",
        "fee": "50$",
        "__v": 0,
        "trainee": [],
        "progress": [],
        "type": {
          "soft_skills": "business attire"
        }
      },
      "__v": 0,
      "status": "not filled"
    },
    {
      "_id": "59050a259c1a9141c9fc4860",
      "updated_at": "2017-04-29T21:48:21.059Z",
      "created_at": "2017-04-29T21:48:21.059Z",
      "content": "this is a sample feedbacke for a course....kodkklv.,vmkknjj.....vjissjfdij",
      "trainee": {
        "_id": "5901d8e7ab27f52ea3b2c10b",
        "updated_at": "2017-04-27T11:41:27.600Z",
        "created_at": "2017-04-27T11:41:27.600Z",
        "profile": "5901d8e7ab27f52ea3b2c10a",
        "__v": 0
      },
      "course": {
        "_id": "5904d9da85b6261a7b4e5630",
        "updatedAt": "2017-04-29T18:22:18.714Z",
        "created_at": "2017-04-29T18:22:18.714Z",
        "credit_hours": 3,
        "prerequisite": "english",
        "schedule": "friday,thursday",
        "fee": "50$",
        "__v": 0,
        "trainee": [],
        "progress": [],
        "type": {
          "soft_skills": "business attire"
        }
      },
      "__v": 0,
      "status": "filled"
    }
  ],
  "total": 12,
  "limit": 3,
  "page": 1,
  "pages": 4
}
 */
router.get('/paginate', feedback.getByPagination);

/**
 * @api {get} /feedbacks/  get all feedback
 * @apiName getFeedbacks
 * @apiGroup Feedbacks
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/feedbacks/
 * 
 * @apiSuccess {String} _id unique feedback id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} content  feedback content
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {String} status feedback status filled or not filled
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * [
 *  {
  "_id": "59050a259c1a9141c9fc4860",
  "updated_at": "2017-04-29T21:48:21.059Z",
  "created_at": "2017-04-29T21:48:21.059Z",
  "content": "this is a sample feedbacke for a course....kodkklv.,vmkknjj.....vjissjfdij",
  "trainee": {
    "_id": "5901d8e7ab27f52ea3b2c10b",
    "updated_at": "2017-04-27T11:41:27.600Z",
    "created_at": "2017-04-27T11:41:27.600Z",
    "profile": "5901d8e7ab27f52ea3b2c10a",
    "__v": 0
  },
  "course": {
    "_id": "5904d9da85b6261a7b4e5630",
    "updatedAt": "2017-04-29T18:22:18.714Z",
    "created_at": "2017-04-29T18:22:18.714Z",
    "credit_hours": 3,
    "prerequisite": "english",
    "schedule": "friday,thursday",
    "fee": "50$",
    "__v": 0,
    "trainee": [],
    "progress": [],
    "type": {
      "soft_skills": "business attire"
    }
  },
  "__v": 0,
  "status": "filled"
}
]
 */
 
router.get('/',feedback.getFeedbacks);
/**
 * @api {get} /feedbacks/  get a specific feedback record
 * @apiName getFeedback
 * @apiGroup Feedbacks
 * 
 * @apiParam {String} id Feedback id
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/feedbacks/59050a259c1a9141c9fc4860
 * 
 * @apiSuccess {String} _id unique feedback id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} content  feedback content
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {String} status feedback status filled or not filled
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * {
  "_id": "59050a259c1a9141c9fc4860",
  "updated_at": "2017-04-29T21:48:21.059Z",
  "created_at": "2017-04-29T21:48:21.059Z",
  "content": "this is a sample feedbacke for a course....kodkklv.,vmkknjj.....vjissjfdij",
  "trainee": {
    "_id": "5901d8e7ab27f52ea3b2c10b",
    "updated_at": "2017-04-27T11:41:27.600Z",
    "created_at": "2017-04-27T11:41:27.600Z",
    "profile": "5901d8e7ab27f52ea3b2c10a",
    "__v": 0
  },
  "course": {
    "_id": "5904d9da85b6261a7b4e5630",
    "updatedAt": "2017-04-29T18:22:18.714Z",
    "created_at": "2017-04-29T18:22:18.714Z",
    "credit_hours": 3,
    "prerequisite": "english",
    "schedule": "friday,thursday",
    "fee": "50$",
    "__v": 0,
    "trainee": [],
    "progress": [],
    "type": {
      "soft_skills": "business attire"
    }
  },
  "__v": 0,
  "status": "filled"
}
 */
router.get('/:_id',feedback.getFeedback);

/**
 * @api {put} /feedbacks/:_id update a specific feedback
 * @apiName updateFeedback
 * @apiGroup Feedbacks
 * 
 * @apiParam {String} content feedback content
 * @apiParam {String} status feedback status 
 * 
 * @apiParamExample Request Example:
 * localhost:8085/feedbacks/59050a259c1a9141c9fc4860
 * {
	  "content":"sample feedback",
        "status":"not filled"
  }
 * @apiSuccess {String} _id unique feedback id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {String} content  feedback content
 * @apiSuccess {Object} admin/trainee admin or trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {String} status feedback status filled or not filled
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * {
  "_id": "59050a259c1a9141c9fc4860",
  "updated_at": "2017-04-29T22:08:38.434Z",
  "created_at": "2017-04-29T21:48:21.059Z",
  "content": "sample feedback",
  "trainee": {
    "_id": "5901d8e7ab27f52ea3b2c10b",
    "updated_at": "2017-04-27T11:41:27.600Z",
    "created_at": "2017-04-27T11:41:27.600Z",
    "profile": "5901d8e7ab27f52ea3b2c10a",
    "__v": 0
  },
  "course": {
    "_id": "5904d9da85b6261a7b4e5630",
    "updatedAt": "2017-04-29T18:22:18.714Z",
    "created_at": "2017-04-29T18:22:18.714Z",
    "credit_hours": 3,
    "prerequisite": "english",
    "schedule": "friday,thursday",
    "fee": "50$",
    "__v": 0,
    "trainee": [],
    "progress": [],
    "type": {
      "soft_skills": "business attire"
    }
  },
  "__v": 0,
  "status": "not filled"
}
 */
router.put('/:_id',feedback.updateFeedback);

/**
 * @api {delete} /feedbacks/:_id  remove specific feedback record
 * @apiName removeFeedback
 * @apiGroup Feedbacks
 * 
 * @apiParam {String} id Feedback id
 * 
 *  @apiParamExample Request Example:
 * localhost:8085/feedbacks/59050a259c1a9141c9fc4860
 * {
  "_id": "59050a259c1a9141c9fc4860",
  "updated_at": "2017-04-29T21:48:21.059Z",
  "created_at": "2017-04-29T21:48:21.059Z",
  "content": "this is a sample feedbacke for a course....kodkklv.,vmkknjj.....vjissjfdij",
  "trainee": {
    "_id": "5901d8e7ab27f52ea3b2c10b",
    "updated_at": "2017-04-27T11:41:27.600Z",
    "created_at": "2017-04-27T11:41:27.600Z",
    "profile": "5901d8e7ab27f52ea3b2c10a",
    "__v": 0
  },
  "course": {
    "_id": "5904d9da85b6261a7b4e5630",
    "updatedAt": "2017-04-29T18:22:18.714Z",
    "created_at": "2017-04-29T18:22:18.714Z",
    "credit_hours": 3,
    "prerequisite": "english",
    "schedule": "friday,thursday",
    "fee": "50$",
    "__v": 0,
    "trainee": [],
    "progress": [],
    "type": {
      "soft_skills": "business attire"
    }
  },
  "__v": 0,
  "status": "filled"
}
*
*  @apiSuccessExample Response Example:
*  HTTP/1.1 200 OK
*{}
*/
router.delete('/:_id',feedback.removeFeedback);

//export router module
module.exports=router;
