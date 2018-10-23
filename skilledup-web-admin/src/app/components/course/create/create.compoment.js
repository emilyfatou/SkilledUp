(function(angular) {
    'use strict';
    var courseAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/course/create/create.html',
        controller:'CourseAppCreateController',
    }

    angular.module('components.course')
            .component('courseAppCreate',courseAppCreate);
})(window.angular);
