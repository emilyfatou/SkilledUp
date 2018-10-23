(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var assignment = {
        templateUrl: 'app/components/assignment/assignment/assignment.html',
        controller: 'AssignmentController'
    }
    //Call angular component function with my module
    angular.module('components.assignment')
        .component('assignment', assignment)
        .config(assignmentConfig);
    assignmentConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function assignmentConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('assignment', {
                url: '/assignment',
                component: 'assignment',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }
            })
    }

})(window.angular);