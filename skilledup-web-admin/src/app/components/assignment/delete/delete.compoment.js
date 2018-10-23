(function(angular) {
    'use strict';
    var assignmentAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/assignment/delete/delete.html',
        controller:'AssignmentDeleteController',
    }

    angular.module('components.assignment')
            .component('assignmentAppDelete',assignmentAppDelete);
})(window.angular);
