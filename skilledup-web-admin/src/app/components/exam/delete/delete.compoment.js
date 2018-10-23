(function(angular) {
    'use strict';
    var examAppDelete={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/exam/delete/delete.html',
        controller:'ExamDeleteController',
    }

    angular.module('components.exam')
            .component('examAppDelete',examAppDelete);
})(window.angular);
