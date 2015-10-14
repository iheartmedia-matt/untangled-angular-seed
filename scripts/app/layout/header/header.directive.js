(function(){
    'use strict';

    angular
        .module('app')
        .directive('untangledHeader', untangledHeader);

    untangledHeader.$inject = ['APP_CONSTANTS', '$route'];

    function untangledHeader(APP_CONSTANTS, $route){

        var directive = {
            restrict: 'E',
            templateUrl: 'scripts/app/layout/header/header.tpl.html',
            link: link
        };

        return directive;

        function link(scope, elem, attrs, ctrl){
            scope.title = 'APP_CONSTANTS.title';
            var routes = _.keys($route.routes);

            routes = _.map(routes, function(value){
                return {
                    title: _getTitleFromHref(value),
                    href: value
                }
            });

            function _getTitleFromHref(href){
                return _.trim(href, '/');
            }

            console.log('mapped routes=');
            console.dir(routes);

            console.log('routes=');
            console.dir($route);
        }

    }
})();