'use strict';

// Declare app level module which depends on views, and core components
angular.module('myNotes', [
  'ngRoute',
  'ngCookies',
  'myNotes.login',
  'myNotes.notes'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}])
.run(['$rootScope', '$location', '$cookies', function ($rootScope, $location, $cookies) {
  $rootScope.currentUser = $cookies.get('currentUser') || null;
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in
    if ($location.path() !== '/login' && !$rootScope.currentUser) {
      $location.path('/login');
    }

    // redirect to notes page if logged in
    if ($location.path() === '/login' && $rootScope.currentUser) {
      $location.path('/notes');
    }
  });
}]);
