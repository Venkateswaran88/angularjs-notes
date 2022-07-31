(function () {
    'use strict';
    angular.module('myNotes.login').controller('LoginController', LoginController);

    function LoginController($scope, loginService, $location) {
        var vm = this;
        vm.title = 'LoginController';
        vm.loginForm = {};
        vm.invalidLogin = false;
        vm.login = login;
        vm.form = {
            username: '',
            password: ''
        };

        function login() {
            var result = loginService.login(vm.form);
            vm.invalidLogin = !result;
            if (result) {
                $location.path("/notes");
            }
        }
    }
})();
