(function(angular) {
    'use strict';
    function CourseAppCreateController(){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
        };

        ctrl.ok = function () {
        var createcourse = {
            credit_hours:ctrl.credit_hours,
            prerequisite:ctrl.prerequisite,
            progress: ctrl.progress,
            trainee:ctrl.trainee,
            schedule:ctrl.schedule,
            fee:ctrl.fee,
            feedback:ctrl.feedback,
           
        };
        ctrl.createcoursedata = createcourse;  
        console.log(ctrl.createcoursedata);
        $http.put('http://130.211.250.101:8001/user/'+ userv.user._id + '/updatePass',userpasswords).then(function(ok){
               },function(err){
                   //say smtg here
                   //console.log(user);
             });
             
        };

        ctrl.cancel = function () {
          ctrl.dismiss({$value: 'cancel'});
        };
    }


    angular.module('components.course')
            .controller('CourseAppCreateController',CourseAppCreateController);
})(window.angular);
