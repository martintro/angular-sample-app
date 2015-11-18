(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('Values', Values);

    Values.$inject = ['$http', 'apiBaseUrl'];

    function Values($http, apiBaseUrl) {
        var service = {
            getValues: getValues,
            createValue: createValue,
            updateValue: updateValue,
            deleteValue: deleteValue
        };

        return service;

        ////////////

        function getValues() {
            return $http.get(apiBaseUrl + "values");
        }

        function createValue(id, name) {
            return $http.post(apiBaseUrl + "values", { id: id, name: name });
        }

        function updateValue(id, name) {
            return $http.put(apiBaseUrl + "values/" + id, angular.toJson(name));
        }

        function deleteValue(id) {
            return $http.delete(apiBaseUrl + "values", { params: { id: id } });
            //return $http.delete(apiBaseUrl + "values/" + id);
        }
    }
})();