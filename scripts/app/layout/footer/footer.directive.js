(function(){
    'use strict';

    angular
        .module('app')
        .directive('untangledFooter', untangledFooter);

    function untangledFooter(){

        var directive = {
            restrict: 'E',
            templateUrl: 'scripts/app/layout/footer/footer.tpl.html'
        };

        return directive;
    }
})();