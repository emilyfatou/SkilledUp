(function(angular) {
    'use strict';
    var examAppCreate={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/exam/create/create.html',
        controller:'ExamAppCreateController',
    }

    angular.module('components.exam')
            .component('examAppCreate',examAppCreate);
})(window.angular);
