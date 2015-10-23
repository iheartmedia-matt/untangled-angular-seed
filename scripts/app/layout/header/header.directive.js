(function(){
    'use strict';

    angular
        .module('app')
        .directive('untangledHeader', untangledHeader);

    function untangledHeader(){

        var directive = {
            restrict: 'E',
            scope: {
                untangledTitle: '@',
                menuItems: '=untangledMenuItems'
            },
            templateUrl: 'scripts/app/layout/header/header.tpl.html',
            link:function(scope, elem, attrs){
                console.log('menuItem = ');
                console.dir(scope.menuItems);
            }
        };

        return directive;
    }
})();