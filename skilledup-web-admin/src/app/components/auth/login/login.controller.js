(function(angular,localStorage){

    function LoginController($scope,$state,$http,countryFactory,AuthService,$rootScope) {
        var ctrl = this;
        ctrl.error = null;
        ctrl.userview = [];
        ctrl.login = function(){
            
            
          var userinfos = {
            email: ctrl.email,
            password: ctrl.password
          }
            AuthService.login(userinfos).then(function (res) {
                ctrl.userview = res.data;
                $rootScope.global = {
                    user: res.data,
                    
                };
                localStorage.setItem('user',JSON.stringify(res.data));
                //to display all the info we get from the api 
                 console.log(ctrl.userview);
                //to display a specific data from the api response like only email etc
                ctrl.userv = $rootScope.global.user;
                console.log(ctrl.userv.user.email);
                $state.go('assignment');
                
            },function(error){
                 $("#infofail").show().delay(2000).fadeOut();
                console.log(error);
            })

      }
    }
    angular.module('components.auth')
           .controller('LoginController', LoginController);

})(window.angular,window.localStorage)

