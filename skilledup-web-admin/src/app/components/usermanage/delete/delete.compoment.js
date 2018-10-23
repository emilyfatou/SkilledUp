(function(angular) {
    'use strict';
    var userAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/usermanage/delete/delete.html',
        controller:'UserDeleteController',
    }

    angular.module('components.usermanage')
            .component('userAppDelete',userAppDelete);
})(window.angular);
