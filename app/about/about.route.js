(function () {
    'use strict';

    angular
        .module('app.about')
        .config(AboutRoute);

    AboutRoute.$inject = ['$stateProvider'];

    function AboutRoute($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                parent: 'layout',
                views: {
                    'content@': {
                        templateUrl: '/ClientApp/about/about.html'
                    }
                }
            });
    }
})();