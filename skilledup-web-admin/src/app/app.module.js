(function(angular) {
  'use strict';

  angular.module('mainApp',[
    'components',
    'common',
    //'ngMockE2E',
    //'jsf',
    'ngMaterial',
    'nvd3',
    'leaflet-directive',
    'ngLoadingSpinner',
    'ui.tinymce',
    
  ])
  .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('HeaderInterceptor');
      console.log("Configuration Hook");
    }])
    .run(['$http', '$rootScope', function ($http, $rootScope) {
      if (typeof $rootScope.global === "undefined") {
        if (localStorage.getItem('user')) {
          $rootScope.global = {
            user: JSON.parse(localStorage.getItem('user')),
          }
        }

      }


      console.log('run app Block');
    }])
//     .run(['$httpBackend','jsfRegisterMock',function($httpBackend,jsfRegisterMock){
//       console.log(jsfRegisterMock);
//       $httpBackend.when('GET', /\.html$/).passThrough();
     
//       jsfRegisterMock({
//         name: 'User Collection',
//         url: '/edituserlist',
//         method: 'GET',
//         responseSchema: {
//           "type": "array",
//           "maxItems": 1,
//           "items": {
//             "type": "object",
//             "properties": {
//               "id":{
//                 "type":"string",
//                 "faker":"random.uuid"
//               },
//               "name": {
//                 "type": "string",
//                 "faker": "name.findName"
//               },
//               "email": {
//                 "type": "string",
//                 "faker": "internet.email"
//               },
             
//               "age": {
//                 "type": "integer",
//                 "minimum": 0,
//                 "maximum": 100
//               },
             
             
//             },
//             "required": [
//               "id",
//               "name",
//               "email",
//               "age",
             
//             ]
//           }
//         }
//       });
// //  jsfRegisterMock({
// //         name: 'User Collection',
// //         url: '/users',
// //         method: 'GET',
// //         responseSchema: {
// //           "type": "array",
// //           "minItems": 10,
// //           "items": {
// //             "type": "object",
// //             "properties": {
// //               "id":{
// //                 "type":"string",
// //                 "faker":"random.uuid"
// //               },
// //               "name": {
// //                 "type": "string",
// //                 "faker": "name.findName"
// //               },
// //               "email": {
// //                 "type": "string",
// //                 "faker": "internet.email"
// //               },
// //               "position": {
// //               "type": "string",
// //               "faker": "name.jobTitle"
// //             },
// //               "age": {
// //                 "type": "integer",
// //                 "minimum": 0,
// //                 "maximum": 100
// //               },
// //                "from": {
// //                 "type": "string",
// //                 "faker": "name.firstName"
// //               },
// //               "to": {
// //                 "type": "string",
// //                 "faker": "name.lastName"
// //               },
             
// //               "content": {
// //                 "type": "string",
// //                 "faker": "lorem.sentence"
// //               },
             
// //             },
// //             "required": [
// //               "id",
// //               "name",
// //               "email",
// //               "position",
// //               "age",
// //               "from",
// //               "to",
// //               "content",
// //               "job",
             
// //             ]
// //           }
// //         }
// //       });


// jsfRegisterMock({
//         name: 'Route Collection',
//         url: '/routes',
//         method: 'GET',
//         responseSchema: {
//           "type": "array",
//           "minItems": 10,
//           "items": {
//             "type": "object",
//             "properties": {
//               "id":{
//                 "type":"string",
//                 "faker":"random.uuid"
//               },
             
//               "from": {
//                 "type": "string",
//                 "faker": "name.firstName"
//               },
//               "to": {
//                 "type": "string",
//                 "faker": "name.lastName"
//               },
             
//               "content": {
//                 "type": "string",
//                 "faker": "lorem.sentence"
//               },

//               "injurylocation": {
//                 "type": "string",
//                 "faker": "address.streetAddress"
//               },
//               "destinationlocation": {
//                 "type": "string",
//                 "faker": "address.streetAddress"
//               },
             
//               "name": {
//                 "type": "string",
//                 "faker": "name.firstName"
//               },
             
//             },
//             "required": [
              
//               "from",
//               "to",
//               "content",
//               "injurylocation",
//               "destinationlocation",
//               "name",
             
            
//             ]
//           }
//         }
//       });
//  jsfRegisterMock({
//         name: 'Message Collection',
//         url: '/messages',
//         method: 'GET',
//         responseSchema: {
//           "type": "array",
//           "minItems": 10,
//           "items": {
//             "type": "object",
//             "properties": {
//               "id":{
//                 "type":"string",
//                 "faker":"random.uuid"
//               },
             
              
//               "from": {
//                 "type": "string",
//                 "faker": "name.firstName"
//               },
//               "to": {
//                 "type": "string",
//                 "faker": "name.lastName"
//               },
             
//               "content": {
//                 "type": "string",
//                 "faker": "lorem.sentence"
//               },
//               "date": {
//               "type": "string",
//               "faker": "date.recent"
//             },
            
             
             
//             },
//             "required": [
//               "id",
//               "from",
//               "to",
//               "content",
//               "date",
              
            
//             ]
//           }
//         }
//       });

//       //  jsfRegisterMock({
//       //   name: 'User',
//       //   url: '/login',
//       //   method: 'POST',
//       //   responseSchema: {
//       //     "type": "object",
//       //     "properties": {
//       //       "name": {
//       //         "type": "string",
//       //         "faker": "name.findName"
//       //       },
//       //       "email": {
//       //         "type": "string",
//       //         "faker": "internet.email"
//       //       },
//       //       "age": {
//       //         "type": "integer",
//       //         "minimum": 0,
//       //         "maximum": 100
//       //       },
//       //       "_token": {
//       //         "type": "string",
//       //         "faker": "random.uuid"
//       //       },

//       //     },
//       //     "required": [
//       //       "name",
//       //       "email",
//       //       "age",
//       //       "_token"
//       //     ]
//       //   }
//       // });

 //   }])
    

})(window.angular, window.localStorage);
