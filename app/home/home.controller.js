(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Values'];
    
    function HomeController(Values) {
        var vm = this;

        vm.id = "";
        vm.name = "";
        vm.values = [];
        vm.createValue = createValue;
        vm.updateValue = updateValue;
        vm.deleteValue = deleteValue;


        activate();

        function activate() {
            getValues();
        }

        function getValues() {
            Values.getValues().then(function (data) {
                vm.values = data.data;
            });
        }

        function createValue() {
            Values.createValue(vm.id, vm.name).then(function (data) {
                vm.id = "";
                vm.name = "";
            });
        }

        function updateValue() {
            Values.updateValue(vm.id, vm.name).then(function (data) {
                vm.id = "";
                vm.name = "";
            });
        }

        function deleteValue() {
            Values.deleteValue(vm.id).then(function (data) {
                vm.id = "";
                vm.name = "";
            });
        }
    }
})();