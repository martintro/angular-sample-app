(function () {
    'use strict';

    angular
        .module('app.home')
        .config(HomeState);

    HomeState.$inject = ['$stateProvider'];

    function HomeState($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                parent: 'layout',
                views: {
                    'content@': {
                        templateUrl: '/ClientApp/home/home.html',
                        controller: 'HomeController'
                    }
                }
            });
    }
})();