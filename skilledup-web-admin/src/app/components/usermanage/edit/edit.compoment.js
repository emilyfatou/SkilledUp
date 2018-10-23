(function(angular) {
    'use strict';
    var userAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/usermanage/edit/edit.html',
        controller:'UserEditController',
    }

    angular.module('components.usermanage')
            .component('userAppEdit',userAppEdit);
})(window.angular);
