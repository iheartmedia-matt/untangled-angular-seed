describe('Footer Directive: untangledFooter', function() {

    'use strict';

    var $compile,
        $scope,
        element;

    describe('Directive initialisation', function() {

        it('should have a footer element as its root', function(){
            expect(element.find('footer')[0].tagName).toBe('FOOTER');
        });
    });

    // Add Jasmine Matcher
    beforeEach(function() {
        addToDeepEqualMatcher();
    });

    // Import app's dependdencies
    beforeEach(module('app'));
    beforeEach(module('ngRoute'));
    beforeEach(module('partials'));

    // Inject the dependencies needed for the tests
    beforeEach(inject(function(_$rootScope_, _$compile_) {
        var $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();
    }));

    beforeEach(function(){
        element = createDirective($scope, '<untangled-footer></untangled-footer>');
    });

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
        element = angular.element(directiveCreationHTML);
        element = $compile(element)(scope);
        scope.$digest();

        return element;
    }

});