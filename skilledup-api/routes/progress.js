//load module dependencies
var express=require('express');
var progress=require('../controllers/progress');

//create router
var router=express.Router();

 
/**
 * @api {post} /progress/ create a progress record
 * @apiName createProgress
 * @apiGroup Progress
 * 
 * @apiParam {String} attendance trainee attendance
 * 
 * @apiParamExample Request Example:
 *  localhost:8085/progress/
 * 
 * {
	"attendance":"present"
 }
 * 
 * @apiSuccess {String} _id unique progress id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {Object} exam exam information
 * @apiSuccess {Object} assignment assignment information
 * @apiSuccess {String} attendance trainee arrendance
 
 * @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {
  "_id": "59059a031ba9fe138d64e5ab",
  "updated_at": "2017-04-30T08:02:11.302Z",
  "created_at": "2017-04-30T08:02:11.302Z",
  "trainee": {
    "_id": "5904dcc91497351cc472ae14",
    "updated_at": "2017-04-29T18:34:49.760Z",
    "created_at": "2017-04-29T18:34:49.760Z",
    "profile": "5904dcc91497351cc472ae13",
    "__v": 0
  },
  "course": {
    "_id": "5904d9dc85b6261a7b4e5631",
    "updatedAt": "2017-04-29T18:22:20.181Z",
    "created_at": "2017-04-29T18:22:20.181Z",
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
  "exam": {
    "_id": "590510d059a7b84690c23a27",
    "updated_at": "2017-04-29T22:16:48.604Z",
    "created_at": "2017-04-29T22:16:48.604Z",
    "schedule": "friday,thursday",
    "score": 40,
    "__v": 0
  },
  "assignment": {
    "_id": "5905056febb0e33c12536513",
    "updated_at": "2017-04-29T21:28:15.623Z",
    "created_at": "2017-04-29T21:28:15.623Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "course": "5904d9df85b6261a7b4e5632",
    "trainee": "5904dcc91497351cc472ae14",
    "__v": 0,
    "status": "submitted"
  },
  "__v": 0,
  "attendance": "present"
}
 */
router.post('/',progress.createProgress);

/**
 * @api {get} /progress/ get progress records by pagination
 * @apiName getByPagination
 * @apiGroup Progress
 * 
 * @apiParamExample Request Example:
 * localhost:8085/progress/paginate?page=1&per_page=2
 * 
 * @apiSuccess {String} _id unique progress id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {Object} exam exam information
 * @apiSuccess {Object} assignment assignment information
 * @apiSuccess {String} attendance trainee arrendance
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "59059a031ba9fe138d64e5ab",
      "updated_at": "2017-04-30T08:02:11.302Z",
      "created_at": "2017-04-30T08:02:11.302Z",
      "trainee": {
        "_id": "5904dcc91497351cc472ae14",
        "updated_at": "2017-04-29T18:34:49.760Z",
        "created_at": "2017-04-29T18:34:49.760Z",
        "profile": "5904dcc91497351cc472ae13",
        "__v": 0
      },
      "course": {
        "_id": "5904d9dc85b6261a7b4e5631",
        "updatedAt": "2017-04-29T18:22:20.181Z",
        "created_at": "2017-04-29T18:22:20.181Z",
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
      "exam": {
        "_id": "590510d059a7b84690c23a27",
        "updated_at": "2017-04-29T22:16:48.604Z",
        "created_at": "2017-04-29T22:16:48.604Z",
        "schedule": "friday,thursday",
        "score": 40,
        "__v": 0
      },
      "assignment": {
        "_id": "5905056febb0e33c12536513",
        "updated_at": "2017-04-29T21:28:15.623Z",
        "created_at": "2017-04-29T21:28:15.623Z",
        "title": "email writing",
        "due_date": "Tuesday",
        "total_marks": 20,
        "course": "5904d9df85b6261a7b4e5632",
        "trainee": "5904dcc91497351cc472ae14",
        "__v": 0,
        "status": "submitted"
      },
      "__v": 0,
      "attendance": "present"
    },
    {
      "_id": "59059ac22c36cc149166e9d4",
      "updated_at": "2017-04-30T08:05:22.622Z",
      "created_at": "2017-04-30T08:05:22.622Z",
      "trainee": {
        "_id": "5904dcc91497351cc472ae14",
        "updated_at": "2017-04-29T18:34:49.760Z",
        "created_at": "2017-04-29T18:34:49.760Z",
        "profile": "5904dcc91497351cc472ae13",
        "__v": 0
      },
      "course": {
        "_id": "5904d9dc85b6261a7b4e5631",
        "updatedAt": "2017-04-29T18:22:20.181Z",
        "created_at": "2017-04-29T18:22:20.181Z",
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
      "exam": {
        "_id": "590510d059a7b84690c23a27",
        "updated_at": "2017-04-29T22:16:48.604Z",
        "created_at": "2017-04-29T22:16:48.604Z",
        "schedule": "friday,thursday",
        "score": 40,
        "__v": 0
      },
      "assignment": {
        "_id": "5905056febb0e33c12536513",
        "updated_at": "2017-04-29T21:28:15.623Z",
        "created_at": "2017-04-29T21:28:15.623Z",
        "title": "email writing",
        "due_date": "Tuesday",
        "total_marks": 20,
        "course": "5904d9df85b6261a7b4e5632",
        "trainee": "5904dcc91497351cc472ae14",
        "__v": 0,
        "status": "submitted"
      },
      "__v": 0,
      "attendance": "present"
    }
  ],
  "total": 5,
  "limit": 2,
  "page": 1,
  "pages": 3
}
 */
router.get('/paginate', progress.getByPagination);

/**
 * @api {get} /progress/:_id get a specific progress information
 * @apiName getProgress
 * @apiGroup Progress
 * 
 * @apiParam {String} id progress id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/progress/59059c130d0387156546ff04
 * 
 *  @apiSuccess {String} _id unique progress id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {Object} exam exam information
 * @apiSuccess {Object} assignment assignment information
 * @apiSuccess {String} attendance trainee arrendance
 * 
 *   @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {
  "_id": "59059c130d0387156546ff04",
  "updated_at": "2017-04-30T08:10:59.365Z",
  "created_at": "2017-04-30T08:10:59.365Z",
  "trainee": {
    "_id": "5904dcc91497351cc472ae14",
    "updated_at": "2017-04-29T18:34:49.760Z",
    "created_at": "2017-04-29T18:34:49.760Z",
    "profile": "5904dcc91497351cc472ae13",
    "__v": 0
  },
  "course": {
    "_id": "5904d9dc85b6261a7b4e5631",
    "updatedAt": "2017-04-29T18:22:20.181Z",
    "created_at": "2017-04-29T18:22:20.181Z",
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
  "exam": {
    "_id": "590510d059a7b84690c23a27",
    "updated_at": "2017-04-29T22:16:48.604Z",
    "created_at": "2017-04-29T22:16:48.604Z",
    "schedule": "friday,thursday",
    "score": 40,
    "__v": 0
  },
  "assignment": {
    "_id": "5905056febb0e33c12536513",
    "updated_at": "2017-04-29T21:28:15.623Z",
    "created_at": "2017-04-29T21:28:15.623Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "course": "5904d9df85b6261a7b4e5632",
    "trainee": "5904dcc91497351cc472ae14",
    "__v": 0,
    "status": "submitted"
  },
  "__v": 0,
  "attendance": "absent"
}
 */
router.get('/:_id',progress.getProgress);

/**
 * @api {get} /progress/ get all progress information
 * @apiName getProgress
 * @apiGroup Progress
 * 
 * @apiParamExample Request Example:
 * localhost:8085/progress/
 * 
 *  @apiSuccess {String} _id unique progress id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {Object} exam exam information
 * @apiSuccess {Object} assignment assignment information
 * @apiSuccess {String} attendance trainee arrendance
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 *[
 *  {
    "_id": "59059ac32c36cc149166e9d5",
    "updated_at": "2017-04-30T08:05:23.790Z",
    "created_at": "2017-04-30T08:05:23.790Z",
    "trainee": {
      "_id": "5904dcc91497351cc472ae14",
      "updated_at": "2017-04-29T18:34:49.760Z",
      "created_at": "2017-04-29T18:34:49.760Z",
      "profile": "5904dcc91497351cc472ae13",
      "__v": 0
    },
    "course": {
      "_id": "5904d9dc85b6261a7b4e5631",
      "updatedAt": "2017-04-29T18:22:20.181Z",
      "created_at": "2017-04-29T18:22:20.181Z",
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
    "exam": {
      "_id": "590510d059a7b84690c23a27",
      "updated_at": "2017-04-29T22:16:48.604Z",
      "created_at": "2017-04-29T22:16:48.604Z",
      "schedule": "friday,thursday",
      "score": 40,
      "__v": 0
    },
    "assignment": {
      "_id": "5905056febb0e33c12536513",
      "updated_at": "2017-04-29T21:28:15.623Z",
      "created_at": "2017-04-29T21:28:15.623Z",
      "title": "email writing",
      "due_date": "Tuesday",
      "total_marks": 20,
      "course": "5904d9df85b6261a7b4e5632",
      "trainee": "5904dcc91497351cc472ae14",
      "__v": 0,
      "status": "submitted"
    },
    "__v": 0,
    "attendance": "present"
  },
  {
    "_id": "59059ac52c36cc149166e9d6",
    "updated_at": "2017-04-30T08:05:25.527Z",
    "created_at": "2017-04-30T08:05:25.527Z",
    "trainee": {
      "_id": "5904dcc91497351cc472ae14",
      "updated_at": "2017-04-29T18:34:49.760Z",
      "created_at": "2017-04-29T18:34:49.760Z",
      "profile": "5904dcc91497351cc472ae13",
      "__v": 0
    },
    "course": {
      "_id": "5904d9dc85b6261a7b4e5631",
      "updatedAt": "2017-04-29T18:22:20.181Z",
      "created_at": "2017-04-29T18:22:20.181Z",
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
    "exam": {
      "_id": "590510d059a7b84690c23a27",
      "updated_at": "2017-04-29T22:16:48.604Z",
      "created_at": "2017-04-29T22:16:48.604Z",
      "schedule": "friday,thursday",
      "score": 40,
      "__v": 0
    },
    "assignment": {
      "_id": "5905056febb0e33c12536513",
      "updated_at": "2017-04-29T21:28:15.623Z",
      "created_at": "2017-04-29T21:28:15.623Z",
      "title": "email writing",
      "due_date": "Tuesday",
      "total_marks": 20,
      "course": "5904d9df85b6261a7b4e5632",
      "trainee": "5904dcc91497351cc472ae14",
      "__v": 0,
      "status": "submitted"
    },
    "__v": 0,
    "attendance": "present"
  }
]
 */
router.get('/',progress.getProgresses);

/**
 *  @api {put} /progress/:_id update a specific progress information
 * @apiName updateProgress
 * @apiGroup Progress
 * 
 * @apiParam {String} id progress id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/progress/59059c130d0387156546ff04
 *{
	"attendance":"present"
  }
 * 
 * @apiSuccess {String} _id unique progress id
 * @apiSuccess {String} updated_at Last Modified Date
 * @apiSuccess {String} created_at Date Created
 * @apiSuccess {Object} trainee trainee information
 * @apiSuccess {Object} course course information
 * @apiSuccess {Object} exam exam information
 * @apiSuccess {Object} assignment assignment information
 * @apiSuccess {String} attendance trainee arrendance
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * 
 * {
  "_id": "59059c130d0387156546ff04",
  "updated_at": "2017-04-30T08:16:58.591Z",
  "created_at": "2017-04-30T08:10:59.365Z",
  "trainee": {
    "_id": "5904dcc91497351cc472ae14",
    "updated_at": "2017-04-29T18:34:49.760Z",
    "created_at": "2017-04-29T18:34:49.760Z",
    "profile": "5904dcc91497351cc472ae13",
    "__v": 0
  },
  "course": {
    "_id": "5904d9dc85b6261a7b4e5631",
    "updatedAt": "2017-04-29T18:22:20.181Z",
    "created_at": "2017-04-29T18:22:20.181Z",
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
  "exam": {
    "_id": "590510d059a7b84690c23a27",
    "updated_at": "2017-04-29T22:16:48.604Z",
    "created_at": "2017-04-29T22:16:48.604Z",
    "schedule": "friday,thursday",
    "score": 40,
    "__v": 0
  },
  "assignment": {
    "_id": "5905056febb0e33c12536513",
    "updated_at": "2017-04-29T21:28:15.623Z",
    "created_at": "2017-04-29T21:28:15.623Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "course": "5904d9df85b6261a7b4e5632",
    "trainee": "5904dcc91497351cc472ae14",
    "__v": 0,
    "status": "submitted"
  },
  "__v": 0,
  "attendance": "present"
}
 */
router.put('/:_id',progress.updateProgress);

/**
 * @api {delete} /progress/:_id remove a specific progress information
 * @apiName removeProgress
 * @apiGroup Progress
 * 
 * @apiParam {String} id progress id
 * 
 * @apiParamExample Request Example:
 * localhost:8085/progress/59059c130d0387156546ff04
 * 
 * {
  "_id": "59059c130d0387156546ff04",
  "updated_at": "2017-04-30T08:17:14.128Z",
  "created_at": "2017-04-30T08:10:59.365Z",
  "trainee": {
    "_id": "5904dcc91497351cc472ae14",
    "updated_at": "2017-04-29T18:34:49.760Z",
    "created_at": "2017-04-29T18:34:49.760Z",
    "profile": "5904dcc91497351cc472ae13",
    "__v": 0
  },
  "course": {
    "_id": "5904d9dc85b6261a7b4e5631",
    "updatedAt": "2017-04-29T18:22:20.181Z",
    "created_at": "2017-04-29T18:22:20.181Z",
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
  "exam": {
    "_id": "590510d059a7b84690c23a27",
    "updated_at": "2017-04-29T22:16:48.604Z",
    "created_at": "2017-04-29T22:16:48.604Z",
    "schedule": "friday,thursday",
    "score": 40,
    "__v": 0
  },
  "assignment": {
    "_id": "5905056febb0e33c12536513",
    "updated_at": "2017-04-29T21:28:15.623Z",
    "created_at": "2017-04-29T21:28:15.623Z",
    "title": "email writing",
    "due_date": "Tuesday",
    "total_marks": 20,
    "course": "5904d9df85b6261a7b4e5632",
    "trainee": "5904dcc91497351cc472ae14",
    "__v": 0,
    "status": "submitted"
  },
  "__v": 0,
  "attendance": "present"
}
 * 
 *  @apiSuccessExample Response Example:
 *  HTTP/1.1 200 OK
 * {}
 */
router.delete('/:_id',progress.removeProgress);

//export router module
module.exports=router;
