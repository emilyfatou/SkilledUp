(function(angular) {
    'use strict';
    function AssignmentAppCreateController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.assignment = ctrl.resolve.assignment;

            console.log(ctrl.assignment);
        };

        ctrl.ok = function () {
        var createassignment = {
            title:ctrl.title,
            due_date:ctrl.due_date,
            content: ctrl.content,
            total_marks:ctrl.total_marks,
           
        };
        ctrl.createassignmentdata = createassignment;  
        console.log(createassignment);
        $http.post(getAssignmentsURL ,createassignment).then(function(ok){
               $("#infosuccess").show().delay(2000).fadeOut();
                ctrl.dismiss({$value: 'cancel'});
               },function(err){
                  $("#infofail").show().delay(2000).fadeOut();
                  ctrl.dismiss({$value: 'cancel'});
                   //say smtg here
                   //console.log(user);
             });
             
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.assignment')
            .controller('AssignmentAppCreateController',AssignmentAppCreateController);
})(window.angular);
