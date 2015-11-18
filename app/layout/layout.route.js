(function () {
    'use strict';

    angular
        .module('app.layout')
        .config(LayoutState);

    LayoutState.$inject = ['$stateProvider'];

    function LayoutState($stateProvider) {
        $stateProvider
            .state('layout', {
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: '/ClientApp/layout/header.html'
                    },
                    'footer': {
                        templateUrl: '/ClientApp/layout/footer.html'
                    }
                }
            });
    }
})();