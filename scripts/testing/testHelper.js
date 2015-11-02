(function(){
    'use strict';

    angular
        .module('testHelper', [])
        .factory('testHelper', testHelper);

    testHelper.$inject = ['$compile'];

    function testHelper($compile){

        var service = {
            createDirective: createDirective
        };

        return service;

        /////////// HELPER FUNCTIONS ///////////

        /**
         * Pass in a scope and the HTML containing the directive under test, and this function will compile the
         * directive and return its element, ready for testing
         *
         * @param scope
         * @param directiveCreationHTML
         * @returns {*}
         */
        function createDirective(scope, directiveCreationHTML){
            var element = angular.element(directiveCreationHTML);
            element = $compile(element)(scope);
            scope.$digest();

            return element;
        }
    }

})();