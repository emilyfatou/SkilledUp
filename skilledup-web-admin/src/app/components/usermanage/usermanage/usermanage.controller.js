(function(angular) {
    'use strict'

    function UsermanageController($stateParams, AuthService, $http, $uibModal, $scope, $rootScope) {
        var ctrl = this;
        
        ctrl.users = [];
        $http.get('http://130.211.250.101:8001/users/').then(function(res) {
            ctrl.users = res.data;
            console.log(ctrl.users);
        })
        
        ctrl.createUser = function(size) {
            var modalInstance = $uibModal.open({
                component: 'userAppCreate',
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)
                // $http.post('/user',user).then(function(ok){
                //     ctrl.users.push(user)
                // },function(err){

                // });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.delete = function(size, user) {

            var modalInstance = $uibModal.open({
                component: 'userAppDelete',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                console.log(user);
                ctrl.users.push(user)

                $http.delete('/user', user).then(function(ok) {
                    ctrl.users.push(user)
                }, function(err) {

                });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }
        ctrl.edit = function(size, user) {
            
            var modalInstance = $uibModal.open({
                component: 'userAppEdit',
                backdrop: 'static',
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
            modalInstance.result.then(function(user) {
                $http.put('http://104.196.247.125:8100/profiles/'+ user._id,user).then(function(ok){
               },function(err){
                   //say smtg here
                   console.log(user);
             });
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.view = function(size, user) {
          var modalInstance = $uibModal.open({
                component: 'userAppView',
               
                resolve: {
                    user: function() {
                        return user;
                    }
                }
            });
           
        }
    }

    angular.module('components.usermanage')
        .controller('UsermanageController', UsermanageController);
})(window.angular)