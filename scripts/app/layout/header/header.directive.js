(function(){
    'use strict';

    angular
        .module('app')
        .directive('untangledHeader', untangledHeader);

    function untangledHeader(){

        var directive = {
            restrict: 'E',
            scope: {
                title: '@untangledTitle',
                menuItems: '=untangledMenuItems'
            },
            templateUrl: 'scripts/app/layout/header/header.tpl.html'
        };

        return directive;
    }
})();