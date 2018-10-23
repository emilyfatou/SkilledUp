(function(angular) {
    'use strict'
    //Create Outgoingmesssages component Object
    var usermanage = {
        templateUrl: 'app/components/usermanage/usermanage/usermanage.html',
        controller: 'UsermanageController'
    }
    //Call angular component function with my module
    angular.module('components.usermanage')
        .component('usermanage', usermanage)
        .config(usermanageConfig);
    usermanageConfig.$inject = ['$stateProvider', '$urlRouterProvider']

    function usermanageConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('usermanage', {
                url: '/usermanage',
                component: 'usermanage',
                parent: 'app',
                data: {
                    requireLogin: false,
                    requireAdmin: false,
                }
            })
    }

})(window.angular);