(function(){
    'use strict';

    angular
        .module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'scripts/app/routes/home/home.html',
                    controllerAs: 'HomeCtrl',
                    controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'routes/about/about.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();