(function(angular) {
    'use strict';
    var courseAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/course/delete/delete.html',
        controller:'CourseDeleteController',
    }

    angular.module('components.course')
            .component('courseAppDelete',courseAppDelete);
})(window.angular);
