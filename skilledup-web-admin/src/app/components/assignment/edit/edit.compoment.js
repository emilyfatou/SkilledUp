(function(angular) {
    'use strict';
    var assignmentAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/assignment/edit/edit.html',
        controller:'AssignmentAppEditController',
    }

    angular.module('components.assignment')
            .component('assignmentAppEdit',assignmentAppEdit);
})(window.angular);
