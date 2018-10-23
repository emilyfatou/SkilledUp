(function(angular) {
    'use strict'

    function AssignmentController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        
        ctrl.assignments = [];
        $http.get(getAssignmentsURL).then(function(res) {
            ctrl.assignments = res.data;
            console.log(ctrl.assignments);
        })
        
        ctrl.createAssignment = function(size) {
            var modalInstance = $uibModal.open({
                component: 'assignmentAppCreate',
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
        ctrl.delete = function(size, assignment) {

             var modalInstance = $uibModal.open({
                component: 'assignmentAppDelete',
                backdrop: 'static',
                resolve: {
                    assignment: function() {
                        return assignment;
                    }
                }
            });
            modalInstance.result.then(function(assignment) {
                $http.delete(getAssignmentsURL+ assignment._id,assignment).then(function(ok){
                     $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, assignment) {
            
            var modalInstance = $uibModal.open({
                component: 'assignmentAppEdit',
                backdrop: 'static',
                resolve: {
                    assignment: function() {
                        return assignment;
                    }
                }
            });
            modalInstance.result.then(function(assignment) {
                $http.put(getAssignmentsURL+ assignment._id,assignment).then(function(ok){
                     $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
    
              

        ctrl.view = function(size, assignment) {
          var modalInstance = $uibModal.open({
                component: 'assignmentAppView',
               
                resolve: {
                    assignment: function() {
                        return assignment;
                    }
                }
            });
           
        }
    }

    angular.module('components.assignment')
        .controller('AssignmentController', AssignmentController);
})(window.angular)