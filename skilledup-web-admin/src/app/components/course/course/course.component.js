(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var course = {
        templateUrl: 'app/components/course/course/course.html',
        controller: 'CourseController'
    }
    //Call angular component function with my module
    angular.module('components.course')
        .component('course', course)
        .config(courseConfig);
    courseConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function courseConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('course', {
                url: '/course',
                component: 'course',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }
            })
    }

})(window.angular);