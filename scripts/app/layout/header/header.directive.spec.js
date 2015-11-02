describe('Header Directive: untangledHeader', function() {

    'use strict';

    var testHelper,
        $scope,
        isolateScope,
        element;

    describe('Directive initialisation', function() {

        it('should set the title on the scope', function() {
            expect(isolateScope.title).toBe('Untangled Seed App');
        });

        it('should set menuItems on the scope', function() {
            expect(isolateScope.menuItems).toDeepEqual([{
                title: 'home',
                href: 'home/'
            },
            {
                title: 'about',
                href: 'about/'
            }]);
        });
    });

    // Add Jasmine Matcher
    beforeEach(function() {
        addToDeepEqualMatcher();

    });

    // Import app's dependencies
    beforeEach(module('app'));
    beforeEach(module('ngRoute'));
    beforeEach(module('partials'));
    beforeEach(module('testHelper'));

    // Inject the dependencies needed for the tests
    beforeEach(inject(function(_$rootScope_, _testHelper_) {
        var $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        testHelper = _testHelper_;
    }));


    beforeEach(function(){
        $scope.menuItems = [{
                title: 'home',
                href: 'home/'
            },
            {
                title: 'about',
                href: 'about/'
            }];

        element = testHelper.createDirective($scope, '<untangled-header untangled-title="Untangled Seed App" untangled-menu-items="menuItems" ></untangled-header>');
        isolateScope = element.isolateScope();
    });
});