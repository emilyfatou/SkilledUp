(function(angular) {
    'use strict';
    var assignmentAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/assignment/create/create.html',
        controller:'AssignmentAppCreateController',
    }

    angular.module('components.assignment')
            .component('assignmentAppCreate',assignmentAppCreate);
})(window.angular);
