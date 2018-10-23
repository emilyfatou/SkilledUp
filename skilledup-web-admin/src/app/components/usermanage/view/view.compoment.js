(function(angular) {
    'use strict';
    var userAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/usermanage/view/view.html',
        controller:'UserAppViewController',
    }

    angular.module('components.usermanage')
            .component('userAppView',userAppView);
})(window.angular);
