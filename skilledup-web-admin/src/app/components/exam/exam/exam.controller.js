(function(angular) {
    'use strict'

    function ExamController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        
        ctrl.exams = [];
        $http.get(getExamsURL).then(function(res) {
            ctrl.exams = res.data;
            console.log(ctrl.exams);
        })
        
        ctrl.createExam = function(size) {
            var modalInstance = $uibModal.open({
                component: 'examAppCreate',
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
        ctrl.delete = function(size, exam) {

             var modalInstance = $uibModal.open({
                component: 'examAppDelete',
                backdrop: 'static',
                resolve: {
                    exam: function() {
                        return exam;
                    }
                }
            });
            modalInstance.result.then(function(exam) {
                $http.delete(getexamsURL+ exam._id,exam).then(function(ok){
                     $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, exam) {
            
            var modalInstance = $uibModal.open({
                component: 'examAppEdit',
                backdrop: 'static',
                resolve: {
                    exam: function() {
                        return exam;
                    }
                }
            });
            modalInstance.result.then(function(exam) {
                $http.put(getExamsURL+ exam._id,exam).then(function(ok){
                     $("#infosuccess").show().delay(2000).fadeOut();
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
    
              

        ctrl.view = function(size, exam) {
          var modalInstance = $uibModal.open({
                component: 'examAppView',
               
                resolve: {
                    exam: function() {
                        return exam;
                    }
                }
            });
           
        }
    }

    angular.module('components.exam')
        .controller('ExamController', ExamController);
})(window.angular)