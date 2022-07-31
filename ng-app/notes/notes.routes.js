(function () {
    'use strict';

    angular
        .module('myNotes.notes')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider.when('/notes', {
            templateUrl: 'ng-app/notes/notes.html',
            controller: 'NotesController as vm'
          });
    }
})();
