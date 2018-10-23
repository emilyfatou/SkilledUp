(function(angular) {
    'use strict';
    var courseAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/course/edit/edit.html',
        controller:'CourseAppEditController',
    }

    angular.module('components.course')
            .component('courseAppEdit',courseAppEdit);
})(window.angular);
