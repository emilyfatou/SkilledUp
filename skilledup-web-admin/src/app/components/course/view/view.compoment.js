(function(angular) {
    'use strict';
    var courseAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/course/view/view.html',
        controller:'CourseAppViewController',
    }

    angular.module('components.course')
            .component('courseAppView',courseAppView);
})(window.angular);
