(function(angular) {
    'use strict'

    function ChangepasswordController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        ctrl.userpasswords = [];
        
        ctrl.$onInit = function() {
            console.log("Controller is being initialized");
            
            ctrl.password = ctrl.resolve.oldpassword;
            ctrl.new_password = ctrl.resolve.newpassword;
            console.log(ctrl.password);
        };

        ctrl.ok = function() {
          var userdata = {
            password: ctrl.oldpassword,
            new_password: ctrl.newpassword
         }
          
       // ctrl.user = ctrl.resolve.user;
        ctrl.userpasswords = userdata;  
        console.log(ctrl.userpasswords);
        ctrl.userv = $rootScope.global.user;
        console.log(ctrl.userv.user._id);
         $http.put('http://130.211.250.101:8001/user/'+ userv.user._id + '/updatePass',userpasswords).then(function(ok){
               },function(err){
                   //say smtg here
                   //console.log(user);
             });
        };
        ctrl.cancel = function() {
            ctrl.dismiss({
                $value: 'cancel'
            });
        };
    }


    angular.module('components.changepassword')
        .controller('ChangepasswordController', ChangepasswordController);
})(window.angular)