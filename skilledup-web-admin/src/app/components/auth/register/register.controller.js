(function(angular) {
  'use strict';

  function RegisterController($scope,$state,$http,countryFactory,AuthService,$rootScope){
    var ctrl = this;
    ctrl. countries = countryFactory.getCountries();


    ctrl.register = function () {
      var user = {
        first_name:ctrl.first_name,
        last_name:ctrl.last_name,
        email: ctrl.email,
        password:ctrl.password,
        phone_number:ctrl.phone_number,
        user_type: "admin"
        
      };
      AuthService.register(user).then(function (response) {
        ctrl.userreg = response.data;
         console.log(ctrl.userreg);
         console.log(response);
         $("#infosuccess").show().delay(2000).fadeOut();
      },function (error) {
        $("#infofail").show().delay(2000).fadeOut();
          console.log(error);
      })
    }

  }

  angular.module('components.auth')
          .controller('RegisterController',RegisterController);

})(window.angular);
