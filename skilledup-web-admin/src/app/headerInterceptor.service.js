(function (angular) {
    'use strict';
    function HeaderInterceptor($rootScope) {

        var interceptor = {

            request: request,
            // requestError: requestError,
            // response: response,
            // responseError: responseError

        }

        function request(config) {
            if ($rootScope.hasOwnProperty('global') && ($rootScope.global.hasOwnProperty('user')) ) {
                config.headers['Authorization'] = 'Bearer ' + $rootScope.global.user.token;
            }


            return config;
        }
        // function requestError(config) {
        //     return config;
        // }
        // function response(res) {
        //     return res;
        // }
        // function responseError(res) {
        //     return res;
        // }
        return interceptor;
    }

    angular.module('mainApp')
        .factory('HeaderInterceptor', HeaderInterceptor);

})(window.angular)