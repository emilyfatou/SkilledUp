(function(angular) {
    'use strict';
    function CourseAppEditController(){
        var ctrl =this;
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.course = ctrl.resolve.course;

            console.log(ctrl.course);
        };

        ctrl.ok = function () {
          ctrl.close({$value: ctrl.course});
          console.log(ctrl.course);     
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.course')
            .controller('CourseAppEditController',CourseAppEditController);
})(window.angular);
