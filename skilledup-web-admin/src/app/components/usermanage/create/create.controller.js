(function(angular) {
    'use strict';
    function UserAppCreateController(){
        var ctrl =this;
        
        ctrl.$onInit = function(){
            console.log("Controller is being initialized");
            ctrl.user = ctrl.resolve.user;

            console.log(ctrl.user);
        };

        ctrl.ok = function () {
        var createuser = {
            first_name:ctrl.first_name,
            last_name:ctrl.last_name,
            email: ctrl.email,
            password:ctrl.password,
            phone_number:ctrl.phone_number,
            user_type: "admin"
            
        };
        ctrl.createuserdata = createuser;  
        console.log(ctrl.createuserdata);
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


    angular.module('components.usermanage')
            .controller('UserAppCreateController',UserAppCreateController);
})(window.angular);
