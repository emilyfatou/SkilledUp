(function(angular) {
    'use strict';
    var assignmentAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/assignment/view/view.html',
        controller:'AssignmentAppViewController',
    }

    angular.module('components.assignment')
            .component('assignmentAppView',assignmentAppView);
})(window.angular);
