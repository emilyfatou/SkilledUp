(function(angular) {
    'use strict'

    function CourseController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        
        ctrl.courses = [];
        $http.get(getCoursesURL).then(function(res) {
            ctrl.courses = res.data;
            console.log(ctrl.courses);
        })
        
        ctrl.createCourse = function(size) {
            var modalInstance = $uibModal.open({
                component: 'courseAppCreate',
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)
                // $http.post('/user',user).then(function(ok){
                //     ctrl.users.push(user)
                // },function(err){

                // });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.delete = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'courseAppDelete',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)

                $http.delete('/user', user).then(function(ok) {
                    ctrl.users.push(user)
                }, function(err) {

                });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, course) {
            
            var modalInstance = $uibModal.open({
                component: 'courseAppEdit',
                backdrop: 'static',
                resolve: {
                    course: function() {
                        return course;
                    }
                }
            });
            modalInstance.result.then(function(course) {
                $http.put(getCoursesURL+ course._id,course).then(function(ok){
                 $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
                   //say smtg here
                   console.log(user);
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.view = function(size, course) {
          var modalInstance = $uibModal.open({
                component: 'courseAppView',
               
                resolve: {
                    course: function() {
                        return course;
                    }
                }
            });
           
        }
    }

    angular.module('components.course')
        .controller('CourseController', CourseController);
})(window.angular)