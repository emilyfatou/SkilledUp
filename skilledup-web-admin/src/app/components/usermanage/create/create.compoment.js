(function(angular) {
    'use strict';
    var userAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/usermanage/create/create.html',
        controller:'UserAppCreateController',
    }

    angular.module('components.usermanage')
            .component('userAppCreate',userAppCreate);
})(window.angular);
