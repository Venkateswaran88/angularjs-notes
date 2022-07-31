(function () {
    'use strict';
    angular.module('myNotes.notes').controller('NotesController', NotesController);

    function NotesController($scope, loginService, $location) {
        var vm = this;
        vm.title = 'NotesController';
        vm.editMode = false;
        vm.currentNoteIndex = false;
        vm.searchText = '';
        vm.addNote = addNote;
        vm.deleteNote = deleteNote;
        vm.editNote = editNote;
        vm.updateNote = updateNote;
        vm.cancel = cancel;
        vm.noteForm = {};
        vm.form = {
            title: '',
            body: ''
        }

        vm.notes = [
            {title: 'first', body: 'sample note'},
            {title: 'second', body: 'test content'}
        ];

        function addNote() {
            var newNote = {title: vm.form.title, body: vm.form.body};
            vm.notes.push(newNote);
            resetForm();
        }

        function deleteNote(index) {
            if (confirm("Are you sure to delete this item?")) {
                vm.notes.splice(index, 1);
            } else {
                return false;
            }
        }

        function editNote(index) {
            vm.editMode = true;
            if (angular.isDefined(vm.notes[index])) {
                vm.currentNoteIndex = index;
                let currentNote = vm.notes[index];
                vm.form = {
                    title: currentNote.title,
                    body: currentNote.body
                }
            }
        }

        function updateNote() {
            vm.editMode = false;
            if (angular.isDefined(vm.notes[vm.currentNoteIndex])) {
                vm.notes[vm.currentNoteIndex].title = vm.form.title;
                vm.notes[vm.currentNoteIndex].body = vm.form.body;
            } else {
                alert('Invaild/Deleted Item');
            }
            vm.currentNoteIndex = false;
            resetForm();
        }

        function cancel() {
            vm.editMode = false;
            resetForm();
        }

        function resetForm() {
            vm.form = {
                title: '',
                body: ''
            }
            vm.noteForm.title.$touched = false;
            vm.noteForm.body.$touched = false;
        }

        vm.logout = function() {
            loginService.logout();
            $location.path("/login");
        }
    }
})();
