describe('Header Directive: untangledHeader', function() {

    'use strict';

    var $compile,
        $scope;

    beforeEach(function() {
        addToDeepEqualMatcher();

    });

    beforeEach(module('app'));
    beforeEach(module('ngRoute'));
    beforeEach(module('partials'));

    var element,
        scope,
        isolateScope;

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        var $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();
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

        createDirective($scope, '<untangled-header untangled-title="Untangled Seed App" untangled-menu-items="menuItems" ></untangled-header>');
    });

    function createDirective(scope, directiveCreationHTML){
        element = angular.element(directiveCreationHTML);
        element = $compile(element)(scope);
        scope.$digest();

        isolateScope = element.isolateScope();
        return element;
    }


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

});