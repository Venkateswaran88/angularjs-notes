(function () {
    'use strict';

    angular
        .module('myNotes.login')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'ng-app/login/login.html',
            controller: 'LoginController as vm'
          });
    }
})();
