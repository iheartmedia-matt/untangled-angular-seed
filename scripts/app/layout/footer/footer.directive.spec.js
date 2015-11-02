describe('Footer Directive: untangledFooter', function() {

    'use strict';

    var $compile,
        $scope,
        element,
        testHelper;

    describe('Directive initialisation', function() {

        it('should have a footer element as its root', function(){
            expect(element.find('footer')[0].tagName).toBe('FOOTER');
        });
    });

    // Import app's dependencies
    beforeEach(module('app'));
    beforeEach(module('ngRoute'));
    beforeEach(module('partials'));
    beforeEach(module('testHelper'));

    // Inject the dependencies needed for the tests
    beforeEach(inject(function(_$rootScope_, _$compile_, _testHelper_) {
        var $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();
        testHelper = _testHelper_;
    }));

    beforeEach(function(){
        element = testHelper.createDirective($scope, '<untangled-footer></untangled-footer>');
    });

});