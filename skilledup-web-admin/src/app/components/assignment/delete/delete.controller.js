(function(angular) {
    'use strict';
    function AssignmentDeleteController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.assignment = ctrl.resolve.assignment;

            console.log(ctrl.assignment);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.assignment});

        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.assignment')
            .controller('AssignmentDeleteController',AssignmentDeleteController);
})(window.angular);
