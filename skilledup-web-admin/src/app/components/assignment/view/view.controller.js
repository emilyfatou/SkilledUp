(function(angular) {
    'use strict';
    function AssignmentAppViewController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.assignment = ctrl.resolve.assignment;

            console.log(ctrl.assignment);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.assignment});
          console.log(ctrl.assignment);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.assignment')
            .controller('AssignmentAppViewController',AssignmentAppViewController);
})(window.angular);
