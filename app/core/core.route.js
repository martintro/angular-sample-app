(function () {
    'use strict';

    angular
        .module('app.core')
        .config(CoreConfig);

    CoreConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

    function CoreConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(false);
    }
})();