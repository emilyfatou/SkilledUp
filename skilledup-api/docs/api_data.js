define({ "api": [
  {
    "type": "get",
    "url": "/admins/",
    "title": "get all admins",
    "name": "getAdmins",
    "group": "Admins",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get admins/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique admin ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the admin User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>admin id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n[{\n    \"_id\": \"58f8775bb6001d218e5e6b01\",\n    \"updated_at\": \"2017-04-20T08:54:51.655Z\",\n    \"created_at\": \"2017-04-20T08:54:51.655Z\",\n    \"profile\": null,\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"5901ae6801e54a15d7bec4dc\",\n    \"updated_at\": \"2017-04-27T08:40:08.324Z\",\n    \"created_at\": \"2017-04-27T08:40:08.324Z\",\n    \"profile\": {\n      \"_id\": \"5901ae6801e54a15d7bec4db\",\n      \"user\": \"5901ae6801e54a15d7bec4da\",\n      \"first_name\": \"kamp\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+251921405957\",\n      \"__v\": 0,\n      \"admin\": \"5901ae6801e54a15d7bec4dc\",\n      \"age\": 25,\n      \"country\": \"ethiopia\",\n      \"sex\": \"female\",\n      \"education_level\": \"B.Sc\"\n    },\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admins"
  },
  {
    "type": "get",
    "url": "/admins/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Admins",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/admins/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n    {\n      \"_id\": \"58f7a65c27545c0308b9c858\",\n      \"updated_at\": \"2017-04-19T18:03:08.251Z\",\n      \"created_at\": \"2017-04-19T18:03:08.251Z\",\n      \"profile\": {\n        \"_id\": \"58f7a65c27545c0308b9c857\",\n        \"user\": \"58f7a65c27545c0308b9c856\",\n        \"first_name\": \"abc\",\n        \"last_name\": \"kyz\",\n        \"__v\": 0,\n        \"admin\": \"58f7a65c27545c0308b9c858\"\n      },\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58f8714af764861f15bc5add\",\n      \"updated_at\": \"2017-04-20T08:28:58.442Z\",\n      \"created_at\": \"2017-04-20T08:28:58.442Z\",\n      \"profile\": {\n        \"_id\": \"58f8714af764861f15bc5adc\",\n        \"user\": \"58f8714af764861f15bc5adb\",\n        \"first_name\": \"tamri\",\n        \"last_name\": \"mesfin\",\n        \"__v\": 0,\n        \"admin\": \"58f8714af764861f15bc5add\"\n      },\n      \"__v\": 0\n    }\n  ],\n  \"total\": 4,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admins"
  },
  {
    "type": "post",
    "url": "/assignments/",
    "title": "create assignment",
    "name": "CreateAssignment",
    "group": "Assignments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>assignment status submitted or not submitted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n  {\n\t\"title\":\"email writing\",\n      \"due_date\":\"Tuesday\",\n      \"total_marks\":\"20\",\n       \"content\":\"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique assignment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>assignment co</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n {\n  \"_id\": \"590d34f29e91fd2d38d88457\",\n  \"updated_at\": \"2017-05-06T02:29:06.302Z\",\n  \"created_at\": \"2017-05-06T02:29:06.302Z\",\n  \"title\": \"email writing\",\n  \"due_date\": \"Tuesday\",\n  \"total_marks\": 20,\n  \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n  \"__v\": 0,\n  \"status\": \"select\",\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "get",
    "url": "/assignments/",
    "title": "get a specific assignment",
    "name": "getAssignment",
    "group": "Assignments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>assignment id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/assignments/590d34f29e91fd2d38d88457",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique assignment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>assignment co</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"590d34f29e91fd2d38d88457\",\n  \"updated_at\": \"2017-05-06T02:38:59.680Z\",\n  \"created_at\": \"2017-05-06T02:29:06.302Z\",\n  \"title\": \"email writing\",\n  \"due_date\": \"Tuesday\",\n  \"total_marks\": 50,\n  \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n  \"__v\": 0,\n  \"status\": \"not submitted\",\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "get",
    "url": "/assignments/",
    "title": "get  all assignments",
    "name": "getAssignments",
    "group": "Assignments",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "assignments/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique assignment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>assignment co</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n   {\n    \"_id\": \"590d34f29e91fd2d38d88457\",\n    \"updated_at\": \"2017-05-06T02:29:06.302Z\",\n    \"created_at\": \"2017-05-06T02:29:06.302Z\",\n    \"title\": \"email writing\",\n    \"due_date\": \"Tuesday\",\n    \"total_marks\": 20,\n    \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n    \"__v\": 0,\n    \"status\": \"select\",\n    \"trainee\": [],\n    \"course\": []\n  },\n  {\n    \"_id\": \"590d3693f8dd192e40837c7f\",\n    \"updated_at\": \"2017-05-06T02:36:03.619Z\",\n    \"created_at\": \"2017-05-06T02:36:03.619Z\",\n    \"title\": \"email writing\",\n    \"due_date\": \"Tuesday\",\n    \"total_marks\": 20,\n    \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n    \"__v\": 0,\n    \"status\": \"not submitted\",\n    \"trainee\": [],\n    \"course\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "get",
    "url": "/assignments/paginate",
    "title": "paginate assignment records",
    "name": "getByPagination",
    "group": "Assignments",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/assignments/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique assignment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>assignment co</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "course",
            "description": "<p>course informationn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n      {\n      \"_id\": \"590d34f29e91fd2d38d88457\",\n      \"updated_at\": \"2017-05-06T02:38:59.680Z\",\n      \"created_at\": \"2017-05-06T02:29:06.302Z\",\n      \"title\": \"email writing\",\n      \"due_date\": \"Tuesday\",\n      \"total_marks\": 50,\n      \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n      \"__v\": 0,\n      \"status\": \"not submitted\",\n      \"trainee\": [],\n      \"course\": []\n    },\n    {\n      \"_id\": \"590d3693f8dd192e40837c7f\",\n      \"updated_at\": \"2017-05-06T02:36:03.619Z\",\n      \"created_at\": \"2017-05-06T02:36:03.619Z\",\n      \"title\": \"email writing\",\n      \"due_date\": \"Tuesday\",\n      \"total_marks\": 20,\n      \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n      \"__v\": 0,\n      \"status\": \"not submitted\",\n      \"trainee\": [],\n      \"course\": []\n    }\n  ],\n  \"total\": 7,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "delete",
    "url": "/assignments/",
    "title": "remove an assignment",
    "name": "removeAssignment",
    "group": "Assignments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>assignment id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example::",
          "content": "localhost:8085/assignments/590d34f29e91fd2d38d88457\n\n{\n  \"_id\": \"590d34f29e91fd2d38d88457\",\n  \"updated_at\": \"2017-05-06T02:29:06.302Z\",\n  \"created_at\": \"2017-05-06T02:29:06.302Z\",\n  \"title\": \"email writing\",\n  \"due_date\": \"Tuesday\",\n  \"total_marks\": 20,\n  \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n  \"__v\": 0,\n  \"status\": \"select\",\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "put",
    "url": "/assignments/",
    "title": "update assignment",
    "name": "updateAssignment",
    "group": "Assignments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>assignment id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>total mark of assignment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>assignment status submitted or not submitted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/assignments/590d34f29e91fd2d38d88457\n{\n       \"total_marks\":\"50\",\n       \"status\":\"not submitted\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique assignment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>assignment title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "due_date",
            "description": "<p>assignment due date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_marks",
            "description": "<p>assignment total marks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>assignment co</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n {\n  \"_id\": \"590d34f29e91fd2d38d88457\",\n  \"updated_at\": \"2017-05-06T02:38:54.930Z\",\n  \"created_at\": \"2017-05-06T02:29:06.302Z\",\n  \"title\": \"email writing\",\n  \"due_date\": \"Tuesday\",\n  \"total_marks\": 50,\n  \"content\": \"this is a sample assignment content,you don't need to rea it sksk hj vdjhisnkk\",\n  \"__v\": 0,\n  \"status\": \"not submitted\",\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/assignment.js",
    "groupTitle": "Assignments"
  },
  {
    "type": "post",
    "url": "/courses/",
    "title": "create a course",
    "name": "Createcourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_title",
            "description": "<p>title of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "syllabus",
            "description": "<p>course summary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>course description about the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_code",
            "description": "<p>course code given</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_material",
            "description": "<p>course material video materials</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>course avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \t\"course_code\":\"c001\",\n      \"course_title\":\"introduction commuincation english\",\n      \"syllabus\":\"This course covers basic nglish grammare and communication\",\n      \"description\":\"this is a dummy course desctiptio,u dnt need to continue reading\",\n      \"course_material\":\"file:///home/tamri/projects/skilled-up-api/docs/index.html\",\n      \"avatar\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique course id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_title",
            "description": "<p>title of the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "syllabus",
            "description": "<p>course summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>course description about the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_code",
            "description": "<p>course code given</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_material",
            "description": "<p>course material video materials</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>course avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"_id\": \"590d25e0debe8e2076ff37f3\",\n  \"updatedAt\": \"2017-05-06T01:24:48.882Z\",\n  \"created_at\": \"2017-05-06T01:24:48.882Z\",\n  \"course_code\": \"c001\",\n  \"course_title\": \"introduction commuincation english\",\n  \"syllabus\": \"This course covers basic nglish grammare and communication\",\n  \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n  \"avatar\": \"\",\n  \"__v\": 0,\n  \"course_material\": [\n    \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n  ],\n  \"trainee\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/",
    "title": "get a course",
    "name": "Getcourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/courses/590d25e0debe8e2076ff37f3",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique course id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_title",
            "description": "<p>title of the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "syllabus",
            "description": "<p>course summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>course description about the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_code",
            "description": "<p>course code given</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_material",
            "description": "<p>course material video materials</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>course avata</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"590d25e0debe8e2076ff37f3\",\n  \"updatedAt\": \"2017-05-06T01:24:48.882Z\",\n  \"created_at\": \"2017-05-06T01:24:48.882Z\",\n  \"course_code\": \"c001\",\n  \"course_title\": \"introduction commuincation english\",\n  \"syllabus\": \"This course covers basic nglish grammare and communication\",\n  \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n  \"avatar\": \"\",\n  \"__v\": 0,\n  \"course_material\": [\n    \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n  ],\n  \"trainee\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/",
    "title": "get  all courses",
    "name": "Getcourses",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "courses/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique course id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_title",
            "description": "<p>title of the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "syllabus",
            "description": "<p>course summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>course description about the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_code",
            "description": "<p>course code given</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_material",
            "description": "<p>course material video materials</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>course avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"_id\": \"590d25e0debe8e2076ff37f3\",\n    \"updatedAt\": \"2017-05-06T01:24:48.882Z\",\n    \"created_at\": \"2017-05-06T01:24:48.882Z\",\n    \"course_code\": \"c001\",\n    \"course_title\": \"introduction commuincation english\",\n    \"syllabus\": \"This course covers basic nglish grammare and communication\",\n    \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n    \"avatar\": \"\",\n    \"__v\": 0,\n    \"course_material\": [\n      \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n    ],\n    \"trainee\": []\n  },\n  {\n    \"_id\": \"590d27f9a2e8ba2210f2539f\",\n    \"updatedAt\": \"2017-05-06T01:33:45.344Z\",\n    \"created_at\": \"2017-05-06T01:33:45.344Z\",\n    \"course_code\": \"B021\",\n    \"course_title\": \"introduction to businee principles\",\n    \"syllabus\": \"This course covers basic business principles\",\n    \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n    \"avatar\": \"\",\n    \"__v\": 0,\n    \"course_material\": [\n      \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n    ],\n    \"trainee\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/paginate",
    "title": "paginate course records",
    "name": "getByPagination",
    "group": "Courses",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/courses/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n        {\n      \"_id\": \"590d25e0debe8e2076ff37f3\",\n      \"updatedAt\": \"2017-05-06T01:42:48.169Z\",\n      \"created_at\": \"2017-05-06T01:24:48.882Z\",\n      \"course_code\": \"mm023\",\n      \"course_title\": \"introduction commuincation english\",\n      \"syllabus\": \"This course covers basic nglish grammare and communication\",\n      \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n      \"avatar\": \"\",\n      \"__v\": 0,\n      \"course_material\": [\n        \"localhost:8085/courses/590d25e0debe8e2076ff37f3\"\n      ],\n      \"trainee\": []\n    },\n    {\n      \"_id\": \"590d27f9a2e8ba2210f2539f\",\n      \"updatedAt\": \"2017-05-06T01:33:45.344Z\",\n      \"created_at\": \"2017-05-06T01:33:45.344Z\",\n      \"course_code\": \"B021\",\n      \"course_title\": \"introduction to businee principles\",\n      \"syllabus\": \"This course covers basic business principles\",\n      \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n      \"avatar\": \"\",\n      \"__v\": 0,\n      \"course_material\": [\n        \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n      ],\n      \"trainee\": []\n    }\n  ],\n  \"total\": 12,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 6\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/",
    "title": "remove a course",
    "name": "removeCourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/courses/590d25e0debe8e2076ff37f3\n\n{\n  \"_id\": \"590d25e0debe8e2076ff37f3\",\n  \"updatedAt\": \"2017-05-06T01:24:48.882Z\",\n  \"created_at\": \"2017-05-06T01:24:48.882Z\",\n  \"course_code\": \"c001\",\n  \"course_title\": \"introduction commuincation english\",\n  \"syllabus\": \"This course covers basic nglish grammare and communication\",\n  \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n  \"avatar\": \"\",\n  \"__v\": 0,\n  \"course_material\": [\n    \"file:///home/tamri/projects/skilled-up-api/docs/index.html\"\n  ],\n  \"trainee\": []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "/courses/",
    "title": "update a course",
    "name": "updateCourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>course schedule</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fee",
            "description": "<p>course fee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/courses/590d25e0debe8e2076ff37f3\n {\n         \"course_material\":\"localhost:8085/courses/590d25e0debe8e2076ff37f3\",\n         \"course_code\":\"mm023\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique course id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_title",
            "description": "<p>title of the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "syllabus",
            "description": "<p>course summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>course description about the course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_code",
            "description": "<p>course code given</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course_material",
            "description": "<p>course material video materials</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>course avata</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"_id\": \"590d25e0debe8e2076ff37f3\",\n  \"updatedAt\": \"2017-05-06T01:42:43.975Z\",\n  \"created_at\": \"2017-05-06T01:24:48.882Z\",\n  \"course_code\": \"mm023\",\n  \"course_title\": \"introduction commuincation english\",\n  \"syllabus\": \"This course covers basic nglish grammare and communication\",\n  \"description\": \"this is a dummy course desctiptio,u dnt need to continue reading\",\n  \"avatar\": \"\",\n  \"__v\": 0,\n  \"course_material\": [\n    \"localhost:8085/courses/590d25e0debe8e2076ff37f3\"\n  ],\n  \"trainee\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/exams/",
    "title": "create exam",
    "name": "CreateExam",
    "group": "Exams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>exam score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n       \"schedule\":\"friday,thursday\",\n      \"score\":\"40\",\n      \"content\":\"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\"\n      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique exam ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>exam score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>exam content question an answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n {\n  \"_id\": \"590d2f6abc0f63280d4fa689\",\n  \"updated_at\": \"2017-05-06T02:05:30.275Z\",\n  \"created_at\": \"2017-05-06T02:05:30.275Z\",\n  \"schedule\": \"friday,thursday\",\n  \"score\": 40,\n  \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n  \"__v\": 0,\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "get",
    "url": "/exams/",
    "title": "get  all exams",
    "name": "GetExams",
    "group": "Exams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>exam id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "exams/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique exam ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>exam score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>exam content question an answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"_id\": \"590d2f39f56c0d27c8722f36\",\n    \"updated_at\": \"2017-05-06T02:04:41.215Z\",\n    \"created_at\": \"2017-05-06T02:04:41.215Z\",\n    \"schedule\": \"friday,thursday\",\n    \"score\": 40,\n    \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n    \"__v\": 0,\n    \"trainee\": [],\n    \"course\": []\n  },\n  {\n    \"_id\": \"590d2f6abc0f63280d4fa689\",\n    \"updated_at\": \"2017-05-06T02:05:30.275Z\",\n    \"created_at\": \"2017-05-06T02:05:30.275Z\",\n    \"schedule\": \"friday,thursday\",\n    \"score\": 40,\n    \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n    \"__v\": 0,\n    \"trainee\": [],\n    \"course\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "get",
    "url": "/exams/paginate",
    "title": "paginate exam records",
    "name": "getByPagination",
    "group": "Exams",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/exams/paginate?page=1&per_page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n        {\n      \"_id\": \"590d2f39f56c0d27c8722f36\",\n      \"updated_at\": \"2017-05-06T02:04:41.215Z\",\n      \"created_at\": \"2017-05-06T02:04:41.215Z\",\n      \"schedule\": \"friday,thursday\",\n      \"score\": 40,\n      \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n      \"__v\": 0,\n      \"trainee\": [],\n      \"course\": []\n    },\n    {\n      \"_id\": \"590d2f6abc0f63280d4fa689\",\n      \"updated_at\": \"2017-05-06T02:05:30.275Z\",\n      \"created_at\": \"2017-05-06T02:05:30.275Z\",\n      \"schedule\": \"friday,thursday\",\n      \"score\": 40,\n      \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n      \"__v\": 0,\n      \"trainee\": [],\n      \"course\": []\n    }\n  ],\n  \"total\": 4,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "get",
    "url": "/exams/",
    "title": "get exam",
    "name": "getExam",
    "group": "Exams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>exam id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/exams/590d2f6abc0f63280d4fa689",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique exam ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>exam score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>exam content question an answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n  {\n  \"_id\": \"590d2f6abc0f63280d4fa689\",\n  \"updated_at\": \"2017-05-06T02:05:30.275Z\",\n  \"created_at\": \"2017-05-06T02:05:30.275Z\",\n  \"schedule\": \"friday,thursday\",\n  \"score\": 40,\n  \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n  \"__v\": 0,\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "delete",
    "url": "/exams/",
    "title": "remove an exam",
    "name": "removeExam",
    "group": "Exams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>exam id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/exams/5904dd021497351cc472ae15\n\n{\n  \"_id\": \"590d2f39f56c0d27c8722f36\",\n  \"updated_at\": \"2017-05-06T02:04:41.215Z\",\n  \"created_at\": \"2017-05-06T02:04:41.215Z\",\n  \"schedule\": \"friday,thursday\",\n  \"score\": 40,\n  \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n  \"__v\": 0,\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "put",
    "url": "/exams/",
    "title": "update an exam",
    "name": "updateExam",
    "group": "Exams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>exam id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee",
            "description": "<p>exam fee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/exams/590d2f39f56c0d27c8722f36\n{\n       \"schedule\":\"sunday\",\n      \"score\":\"100\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique exam ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>exam schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>exam score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>exam content question an answer</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "trainee",
            "description": "<p>trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"_id\": \"590d2f39f56c0d27c8722f36\",\n  \"updated_at\": \"2017-05-06T02:04:41.215Z\",\n  \"created_at\": \"2017-05-06T02:04:41.215Z\",\n  \"schedule\": \"Sunday\",\n  \"score\": 100,\n  \"content\": \"this is sample exam content ksnckzcmk knzcjhucjh tfvbxvzgok'smckbcu\",\n  \"__v\": 0,\n  \"trainee\": [],\n  \"course\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/exam.js",
    "groupTitle": "Exams"
  },
  {
    "type": "get",
    "url": "/profiles/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Profiles",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/profiles/paginate?page=1&per_page=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58ffe62b11a2a71bfbca395c\",\n      \"user\": \"58ffe62b11a2a71bfbca395b\",\n      \"first_name\": \"doji\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+2511987456\",\n      \"__v\": 0,\n      \"trainee\": {\n        \"_id\": \"58ffe62b11a2a71bfbca395d\",\n        \"updated_at\": \"2017-04-26T00:13:31.229Z\",\n        \"created_at\": \"2017-04-26T00:13:31.229Z\",\n        \"profile\": \"58ffe62b11a2a71bfbca395c\",\n        \"__v\": 0\n      }\n    }\n  ],\n  \"total\": 1,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:_id",
    "title": "get a profile",
    "name": "getProfile",
    "group": "Profiles",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/profiles/5901ae6801e54a15d7bec4db",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "admin/trainee",
            "description": "<p>admin or trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>where the user lives</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education_level",
            "description": "<p>level of eucation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5901ae6801e54a15d7bec4db\",\n  \"user\": \"5901ae6801e54a15d7bec4da\",\n  \"first_name\": \"kamp\",\n  \"last_name\": \"kmp\",\n  \"phone_number\": \"+251921405957\",\n  \"__v\": 0,\n  \"admin\": {\n    \"_id\": \"5901ae6801e54a15d7bec4dc\",\n    \"updated_at\": \"2017-04-27T08:40:08.324Z\",\n    \"created_at\": \"2017-04-27T08:40:08.324Z\",\n    \"profile\": \"5901ae6801e54a15d7bec4db\",\n    \"__v\": 0\n  },\n  \"age\": 25,\n  \"country\": \"ethiopia\",\n  \"sex\": \"female\",\n  \"education_level\": \"B.Sc\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/",
    "title": "get all profiles",
    "name": "getProfiles",
    "group": "Profiles",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "admin/trainee",
            "description": "<p>admin or trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>where the user lives</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education_level",
            "description": "<p>level of eucation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58ffe62b11a2a71bfbca395c\",\n    \"user\": \"58ffe62b11a2a71bfbca395b\",\n    \"first_name\": \"doji\",\n    \"last_name\": \"kmp\",\n    \"phone_number\": \"+2511987456\",\n    \"__v\": 0,\n    \"trainee\": {\n      \"_id\": \"58ffe62b11a2a71bfbca395d\",\n      \"updated_at\": \"2017-04-26T00:13:31.229Z\",\n      \"created_at\": \"2017-04-26T00:13:31.229Z\",\n      \"profile\": \"58ffe62b11a2a71bfbca395c\",\n      \"__v\": 0\n    }\n  },\n  {\n    \"_id\": \"5901ae6801e54a15d7bec4db\",\n    \"user\": \"5901ae6801e54a15d7bec4da\",\n    \"first_name\": \"kamp\",\n    \"last_name\": \"kmp\",\n    \"phone_number\": \"+251921405957\",\n    \"__v\": 0,\n    \"admin\": {\n      \"_id\": \"5901ae6801e54a15d7bec4dc\",\n      \"updated_at\": \"2017-04-27T08:40:08.324Z\",\n      \"created_at\": \"2017-04-27T08:40:08.324Z\",\n      \"profile\": \"5901ae6801e54a15d7bec4db\",\n      \"__v\": 0\n    },\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"sex\": \"female\",\n    \"education_level\": \"B.Sc\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/profiles/",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "delete",
    "url": "/profiles/",
    "title": "remove profile",
    "name": "removeProfile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/profiles/58f8775bb6001d218e5e6b00\n{\n  \"_id\": \"5901ae6801e54a15d7bec4db\",\n  \"user\": \"5901ae6801e54a15d7bec4da\",\n  \"first_name\": \"kamp\",\n  \"last_name\": \"kmp\",\n  \"phone_number\": \"+251921405957\",\n  \"__v\": 0,\n  \"admin\": {\n    \"_id\": \"5901ae6801e54a15d7bec4dc\",\n    \"updated_at\": \"2017-04-27T08:40:08.324Z\",\n    \"created_at\": \"2017-04-27T08:40:08.324Z\",\n    \"profile\": \"5901ae6801e54a15d7bec4db\",\n    \"__v\": 0\n  },\n  \"age\": 25,\n  \"country\": \"ethiopia\",\n  \"sex\": \"female\",\n  \"education_level\": \"B.Sc\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "put",
    "url": "/profiles/:_id",
    "title": "update a profile",
    "name": "updateProfile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "education_status",
            "description": "<p>user level of education</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>where the user lives</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>the gender of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/profiles/58f875fda6e1eb20410e834e \n{\n\t\n\t\"phone_number\":\"+251921405957\",\n\t\"age\":\"25\",\n\t\"country\":\"ethiopia\",\n\t\"sex\":\"female\",\n\t\"education_level\":\"B.Sc\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "admin/trainee",
            "description": "<p>admin or trainee information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>where the user lives</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "education_level",
            "description": "<p>level of eucation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK \n\n{\n  \"_id\": \"58f875fda6e1eb20410e834e\",\n  \"user\": \"58f875fda6e1eb20410e834d\",\n  \"first_name\": \"tamri\",\n  \"last_name\": \"mesfin\",\n  \"__v\": 0,\n  \"phone_number\": \"+251921405957\",\n  \"age\": 25,\n  \"country\": \"ethiopia\",\n  \"sex\": \"female\",\n  \"education_level\": \"B.Sc\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/trainees/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Trainees",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/trainees/paginate?page=1&per_page=4",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58f6441574247a2632886326\",\n      \"updated_at\": \"2017-04-18T16:51:33.964Z\",\n      \"created_at\": \"2017-04-18T16:51:33.964Z\",\n      \"profile\": {\n        \"_id\": \"58f6441574247a2632886325\",\n        \"user\": \"58f6441574247a2632886324\",\n        \"first_name\": \"tamri\",\n        \"last_name\": \"mesfin\",\n        \"__v\": 0\n      },\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58f64499c69f03266efdd3c6\",\n      \"updated_at\": \"2017-04-18T16:53:45.005Z\",\n      \"created_at\": \"2017-04-18T16:53:45.005Z\",\n      \"profile\": {\n        \"_id\": \"58f64498c69f03266efdd3c5\",\n        \"user\": \"58f64498c69f03266efdd3c4\",\n        \"first_name\": \"tamri\",\n        \"last_name\": \"mesfin\",\n        \"__v\": 0\n      },\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58f644a91426cd26a0751fdf\",\n      \"updated_at\": \"2017-04-18T16:54:01.619Z\",\n      \"created_at\": \"2017-04-18T16:54:01.619Z\",\n      \"profile\": {\n        \"_id\": \"58f644a91426cd26a0751fde\",\n        \"user\": \"58f644a91426cd26a0751fdd\",\n        \"first_name\": \"tamri\",\n        \"last_name\": \"mesfin\",\n        \"__v\": 0\n      },\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"58f71fbe45dfa80cbea9ad97\",\n      \"updated_at\": \"2017-04-19T08:28:46.693Z\",\n      \"created_at\": \"2017-04-19T08:28:46.693Z\",\n      \"profile\": {\n        \"_id\": \"58f71fbe45dfa80cbea9ad96\",\n        \"user\": \"58f71fbe45dfa80cbea9ad95\",\n        \"first_name\": \"abc\",\n        \"last_name\": \"kyz\",\n        \"__v\": 0\n      },\n      \"__v\": 0\n    }\n  ],\n  \"total\": 10,\n  \"limit\": 4,\n  \"page\": 1,\n  \"pages\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/trainee.js",
    "groupTitle": "Trainees"
  },
  {
    "type": "get",
    "url": "/trainees/",
    "title": "get all trainees",
    "name": "getTrainees",
    "group": "Trainees",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get /trainees",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique trainee ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n{\n    \"_id\": \"58f723a5de63360eb77edf28\",\n    \"updated_at\": \"2017-04-19T08:45:25.484Z\",\n    \"created_at\": \"2017-04-19T08:45:25.484Z\",\n    \"profile\": {\n      \"_id\": \"58f723a5de63360eb77edf27\",\n      \"user\": \"58f723a5de63360eb77edf26\",\n      \"first_name\": \"sam\",\n      \"last_name\": \"kyz\",\n      \"__v\": 0\n    },\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58f7523fd2d167138fb31e2e\",\n    \"updated_at\": \"2017-04-19T12:04:15.114Z\",\n    \"created_at\": \"2017-04-19T12:04:15.114Z\",\n    \"profile\": {\n      \"_id\": \"58f7523fd2d167138fb31e2d\",\n      \"user\": \"58f7523fd2d167138fb31e2c\",\n      \"first_name\": \"ed\",\n      \"last_name\": \"kyz\",\n      \"__v\": 0\n    },\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58f7a2ec9cc8fe7f1987247c\",\n    \"updated_at\": \"2017-04-19T17:48:28.690Z\",\n    \"created_at\": \"2017-04-19T17:48:28.690Z\",\n    \"profile\": {\n      \"_id\": \"58f7a2ec9cc8fe7f1987247b\",\n      \"user\": \"58f7a2ec9cc8fe7f1987247a\",\n      \"first_name\": \"abc\",\n      \"last_name\": \"kyz\",\n      \"__v\": 0\n    },\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58f85daa2e32c00fe7187719\",\n    \"updated_at\": \"2017-04-20T07:05:14.299Z\",\n    \"created_at\": \"2017-04-20T07:05:14.299Z\",\n    \"profile\": {\n      \"_id\": \"58f85daa2e32c00fe7187718\",\n      \"user\": \"58f85daa2e32c00fe7187717\",\n      \"first_name\": \"tamri\",\n      \"last_name\": \"mesfin\",\n      \"__v\": 0\n    },\n    \"__v\": 0\n  }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/trainee.js",
    "groupTitle": "Trainees"
  },
  {
    "type": "get",
    "url": "/users/:_id",
    "title": "get a specific user",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "users/58f71fbe45dfa80cbea9ad95",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5901ae6801e54a15d7bec4da\",\n  \"updated_at\": \"2017-04-27T08:53:52.883Z\",\n  \"created_at\": \"2017-04-27T08:40:08.181Z\",\n  \"email\": \"kamp@gmail.com\",\n  \"password\": \"$2a$07$C2t2gIXZsllimhppwx.XYeNHLTJKkArhoUEhWqrl5bfxjGqJ1AaAS\",\n  \"__v\": 0,\n  \"profile\": {\n    \"_id\": \"5901ae6801e54a15d7bec4db\",\n    \"user\": \"5901ae6801e54a15d7bec4da\",\n    \"first_name\": \"kamp\",\n    \"last_name\": \"kmp\",\n    \"phone_number\": \"+251921405957\",\n    \"__v\": 0,\n    \"admin\": \"5901ae6801e54a15d7bec4dc\",\n    \"age\": 25,\n    \"country\": \"ethiopia\",\n    \"sex\": \"female\",\n    \"education_level\": \"B.Sc\"\n  },\n  \"last_login\": \"2017-04-27T08:53:52.883Z\",\n  \"realm\": \"user\",\n  \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "user signup",
    "name": "createUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type - admin or trainee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "http://skilledup-api.ett.gebeya.io/users/signup\n {\n\t\"first_name\":\"abc\",\n\t\"last_name\":\"kyz\",\n\t\"email\":\"check@gmail.com\",\n\t\"password\":\"longpassword\",\n\t\"phone_number\":\"+251921405957\",\n\t\"user_type\":\"admin\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n\n {\n  \"_id\": \"58f7a65c27545c0308b9c856\",\n  \"updated_at\": \"2017-04-19T18:03:08.215Z\",\n  \"created_at\": \"2017-04-19T18:03:08.215Z\",\n  \"email\": \"check@gmail.com\",\n   \"__v\": 0,\n  \"realm\": \"user\",\n  \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/paginate",
    "title": "pagination",
    "name": "getByPagination",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "localhost:8085/users/paginate?page=1&per_page=3",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"58f7523fd2d167138fb31e2c\",\n      \"updated_at\": \"2017-04-19T17:44:35.930Z\",\n      \"created_at\": \"2017-04-19T12:04:15.071Z\",\n      \"email\": \"ed@gmail.com\",\n      \"phone_number\": \"+25123456789\",\n      \"password\": \"$2a$07$Zu0ui6aL6MIOG56WiYwS/u9OrMc7hVYOdq69livtQ1S7JJFEwbusi\",\n      \"__v\": 0,\n      \"profile\": {\n        \"_id\": \"58f7523fd2d167138fb31e2d\",\n        \"user\": \"58f7523fd2d167138fb31e2c\",\n        \"first_name\": \"ed\",\n        \"last_name\": \"kyz\",\n        \"__v\": 0\n      },\n      \"last_login\": \"2017-04-19T17:44:35.929Z\",\n      \"realm\": \"user\",\n      \"role\": \"trainee\"\n    },\n    {\n      \"_id\": \"58f7a2ec9cc8fe7f1987247a\",\n      \"updated_at\": \"2017-04-20T07:15:22.370Z\",\n      \"created_at\": \"2017-04-19T17:48:28.605Z\",\n      \"email\": \"kyz@gmail.com\",\n      \"phone_number\": \"+251921405957\",\n      \"password\": \"$2a$07$nWGzsU3QnBOKeOuZ/KKa0Oyxlo0jUlURuWn8DQORd.PhGK/axdTb6\",\n      \"__v\": 0,\n      \"profile\": {\n        \"_id\": \"58f7a2ec9cc8fe7f1987247b\",\n        \"user\": \"58f7a2ec9cc8fe7f1987247a\",\n        \"first_name\": \"abc\",\n        \"last_name\": \"kyz\",\n        \"__v\": 0\n      },\n      \"last_login\": \"2017-04-20T07:15:22.369Z\",\n      \"realm\": \"user\",\n      \"role\": \"trainee\"\n    },\n    {\n      \"_id\": \"58f7a65c27545c0308b9c856\",\n      \"updated_at\": \"2017-04-19T18:03:08.246Z\",\n      \"created_at\": \"2017-04-19T18:03:08.215Z\",\n      \"email\": \"check@gmail.com\",\n      \"phone_number\": \"+251921405957\",\n      \"password\": \"$2a$07$1x6/08Irrr02qLGSAIN/EufbnOybZL1wyl6npFpxfzmP6zgVtF3kS\",\n      \"__v\": 0,\n      \"profile\": {\n        \"_id\": \"58f7a65c27545c0308b9c857\",\n        \"user\": \"58f7a65c27545c0308b9c856\",\n        \"first_name\": \"abc\",\n        \"last_name\": \"kyz\",\n        \"__v\": 0,\n        \"admin\": \"58f7a65c27545c0308b9c858\"\n      },\n      \"realm\": \"user\",\n      \"role\": \"admin\"\n    }\n  ],\n  \"total\": 8,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "get a all users",
    "name": "getUsers",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "http://skilledup-api.ett.gebeya.io/users/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5901ae6801e54a15d7bec4da\",\n    \"updated_at\": \"2017-04-27T08:53:52.883Z\",\n    \"created_at\": \"2017-04-27T08:40:08.181Z\",\n    \"email\": \"kamp@gmail.com\",\n    \"password\": \"$2a$07$C2t2gIXZsllimhppwx.XYeNHLTJKkArhoUEhWqrl5bfxjGqJ1AaAS\",\n    \"__v\": 0,\n    \"profile\": {\n      \"_id\": \"5901ae6801e54a15d7bec4db\",\n      \"user\": \"5901ae6801e54a15d7bec4da\",\n      \"first_name\": \"kamp\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+251921405957\",\n      \"__v\": 0,\n      \"admin\": \"5901ae6801e54a15d7bec4dc\",\n      \"age\": 25,\n      \"country\": \"ethiopia\",\n      \"sex\": \"female\",\n      \"education_level\": \"B.Sc\"\n    },\n    \"last_login\": \"2017-04-27T08:53:52.883Z\",\n    \"realm\": \"user\",\n    \"role\": \"admin\"\n  },\n  {\n    \"_id\": \"5901b5bec7d2231c8e767a78\",\n    \"updated_at\": \"2017-04-27T09:11:26.560Z\",\n    \"created_at\": \"2017-04-27T09:11:26.525Z\",\n    \"email\": \"dani@gmail.com\",\n    \"password\": \"$2a$07$JMm6UlOg.F.E5iJGJFEiJeNj5Sj8PqrnMl8bhpVkX.QFHEZ1dDCOu\",\n    \"__v\": 0,\n    \"profile\": {\n      \"_id\": \"5901b5bec7d2231c8e767a79\",\n      \"user\": \"5901b5bec7d2231c8e767a78\",\n      \"first_name\": \"kamp\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+2511987456\",\n      \"__v\": 0,\n      \"admin\": \"5901b5bec7d2231c8e767a7a\"\n    },\n    \"realm\": \"user\",\n    \"role\": \"admin\"\n  },\n  {\n    \"_id\": \"5901d8e7ab27f52ea3b2c109\",\n    \"updated_at\": \"2017-04-27T11:41:27.595Z\",\n    \"created_at\": \"2017-04-27T11:41:27.512Z\",\n    \"email\": \"tam@gmail.com\",\n    \"password\": \"$2a$07$Y2f4x/5iXWrvGn1E8i7I9OJ3JFP8sLDn1q/O2BP.7permL8L5x17G\",\n    \"__v\": 0,\n    \"profile\": {\n      \"_id\": \"5901d8e7ab27f52ea3b2c10a\",\n      \"user\": \"5901d8e7ab27f52ea3b2c109\",\n      \"first_name\": \"gud\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+2511987456\",\n      \"__v\": 0,\n      \"trainee\": \"5901d8e7ab27f52ea3b2c10b\"\n    },\n    \"realm\": \"user\",\n    \"role\": \"trainee\"\n  },\n  {\n    \"_id\": \"5901d927ab27f52ea3b2c10c\",\n    \"updated_at\": \"2017-04-27T11:42:31.089Z\",\n    \"created_at\": \"2017-04-27T11:42:31.072Z\",\n    \"email\": \"tam1@gmail.com\",\n    \"password\": \"$2a$07$03Ob6BHeuIHaYc0.97VkQuPS1NwOWBSFlATPG4cdTVMFQTzgI7tBe\",\n    \"__v\": 0,\n    \"profile\": {\n      \"_id\": \"5901d927ab27f52ea3b2c10d\",\n      \"user\": \"5901d927ab27f52ea3b2c10c\",\n      \"first_name\": \"gud\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+2511987456\",\n      \"__v\": 0,\n      \"admin\": \"5901d927ab27f52ea3b2c10e\"\n    },\n    \"realm\": \"user\",\n    \"role\": \"admin\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "login",
    "name": "login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "http://skilledup-api.ett.gebeya.io/users//login\n\n  {\n \n    \"email\":\"kamp@gmail.com\",\n\t\"password\":\"longpass\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token value</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user information</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK \n{\n  \"token\": \"a7MtASg8A5E1/E3JrjwS\",\n  \"user\": {\n    \"_id\": \"5901ae6801e54a15d7bec4da\",\n    \"updated_at\": \"2017-04-27T08:51:19.595Z\",\n    \"created_at\": \"2017-04-27T08:40:08.181Z\",\n    \"email\": \"kamp@gmail.com\",\n    \"__v\": 0,\n    \"profile\": {\n      \"_id\": \"5901ae6801e54a15d7bec4db\",\n      \"user\": \"5901ae6801e54a15d7bec4da\",\n      \"first_name\": \"kamp\",\n      \"last_name\": \"kmp\",\n      \"phone_number\": \"+251921405957\",\n      \"__v\": 0,\n      \"admin\": \"5901ae6801e54a15d7bec4dc\",\n      \"age\": 25,\n      \"country\": \"ethiopia\",\n      \"sex\": \"female\"\n    },\n    \"last_login\": \"2017-04-27T08:51:19.595Z\",\n    \"realm\": \"user\",\n    \"role\": \"admin\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "logout",
    "name": "logout",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token value given when user login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "http://skilledup-api.ett.gebeya.io/users//logout",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK \n{\n  \"message\": \"user Logged out successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/updatePass/:_id",
    "title": "change password",
    "name": "passwordChange",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>the password to be used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "/users/58f7523fd2d167138fb31e2c/updatepass\n\n{\n  \t\"password\":\"thisismypass\",\n  \t\"new_password\":\"mynewpass\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK \n{\n  \"message\": \"password changed Sucessfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:_id",
    "title": "remove a specific user",
    "name": "removeUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "users/58f71fbe45dfa80cbea9ad95\n\n{\n  \"_id\": \"58f71fbe45dfa80cbea9ad95\",\n  \"updated_at\": \"2017-04-19T11:56:38.995Z\",\n  \"created_at\": \"2017-04-19T08:28:46.653Z\",\n  \"email\": \"test@gmail.com\",\n  \"password\": \"mypass\",\n  \"__v\": 0,\n  \"profile\": {\n    \"_id\": \"58f71fbe45dfa80cbea9ad96\",\n    \"user\": \"58f71fbe45dfa80cbea9ad95\",\n    \"first_name\": \"abc\",\n    \"last_name\": \"kyz\",\n    \"__v\": 0\n  },\n  \"phone_number\": \"+1112223333\",\n  \"realm\": \"user\",\n  \"role\": \"trainee\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK \n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:_id",
    "title": "update a user",
    "name": "updateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "users/58f71fbe45dfa80cbea9ad95\n\n{\n  \t\"email\":\"test@gmail.com\",\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>user profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>last login time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK \n{\n  \"_id\": \"58f71fbe45dfa80cbea9ad95\",\n  \"updated_at\": \"2017-04-19T11:56:38.995Z\",\n  \"created_at\": \"2017-04-19T08:28:46.653Z\",\n  \"email\": \"test@gmail.com\",\n  \"password\": \"mypass\",\n  \"__v\": 0,\n  \"profile\": {\n    \"_id\": \"58f71fbe45dfa80cbea9ad96\",\n    \"user\": \"58f71fbe45dfa80cbea9ad95\",\n    \"first_name\": \"abc\",\n    \"last_name\": \"kyz\",\n    \"__v\": 0\n  },\n  \"phone_number\": \"+1112223333\",\n  \"realm\": \"user\",\n  \"role\": \"trainee\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users"
  }
] });
