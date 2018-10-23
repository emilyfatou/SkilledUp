(function(angular) {
    'use strict';
    function ExamAppCreateController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.exam = ctrl.resolve.exam;

            console.log(ctrl.exam);
        };

        ctrl.ok = function () {
        var createexam = {
            schedule:ctrl.schedule,
            score:ctrl.score,
            
           
        };
        ctrl.createexamdata = createexam;  
        console.log(createexam);
        $http.post(getExamsURL ,createexam).then(function(ok){
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


    angular.module('components.exam')
            .controller('ExamAppCreateController',ExamAppCreateController);
})(window.angular);
