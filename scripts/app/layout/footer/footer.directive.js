(function(){
    'use strict';

    angular
        .module('app')
        .directive('untangledFooter', untangledFooter);

    function untangledFooter(){

        var directive = {
            restrict: 'E',
            templateUrl: 'scripts/app/layout/header/footer.tpl.html'
        };

        return directive;
    }
})();