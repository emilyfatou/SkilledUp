(function(angular) {
    'use strict';
    var examAppView={
        bindings:{
            resolve:'<',
            close: '&',
            dismiss: '&'
        },
        templateUrl:'app/components/exam/view/view.html',
        controller:'ExamAppViewController',
    }

    angular.module('components.exam')
            .component('examAppView',examAppView);
})(window.angular);
