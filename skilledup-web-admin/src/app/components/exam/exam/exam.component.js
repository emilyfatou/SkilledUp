(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var exam = {
        templateUrl: 'app/components/exam/exam/exam.html',
        controller: 'ExamController'
    }
    //Call angular component function with my module
    angular.module('components.exam')
        .component('exam', exam)
        .config(examConfig);
    examConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function examConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('exam', {
                url: '/exam',
                component: 'exam',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }
            })
    }

})(window.angular);