(function () {
  'use strict';

  angular
      .module('myNotes')
      .factory('loginService', loginService);

  function loginService($rootScope, $cookies) {
    var username = 'admin';
    var password = 'admin';

    return {
        login: login,
        logout: logout,
    };

    function login(data) {
        let isAuthenticated = data.username === username && data.password === password;
        $rootScope.currentUser = username;
        $cookies.put('currentUser', username);
        return isAuthenticated;
    }

    function logout() {
        $rootScope.currentUser = '';
        $cookies.remove('currentUser');
        return true;
    }
  }
})();
