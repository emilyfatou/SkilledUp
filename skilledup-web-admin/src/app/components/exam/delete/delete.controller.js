(function(angular) {
    'use strict';
    function ExamDeleteController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.exam = ctrl.resolve.exam;

            console.log(ctrl.exam);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.exam});

        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.exam')
            .controller('ExamDeleteController',ExamDeleteController);
})(window.angular);
