(function(angular) {
    'use strict';
    var examAppEdit={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/exam/edit/edit.html',
        controller:'ExamAppEditController',
    }

    angular.module('components.exam')
            .component('examAppEdit',examAppEdit);
})(window.angular);
