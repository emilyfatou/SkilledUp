(function(angular) {

'use strict'

angular.module('components',['components.auth',
                               'components.usermanage',
                               'components.changepassword',
                               'components.assignment',
                               'components.course',
                               'components.exam',
                               ])
           .run([function(){

            console.log('components run');

            }]);

})(window.angular);
