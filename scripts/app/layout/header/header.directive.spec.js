describe('Header Directive: untangledHeader', function() {

    'use strict';

    beforeEach(module('app'));
    beforeEach(module('ngRoute'));
    beforeEach(module('partials'));

    var element,
        scope,
        APP_CONSTANTS,
        isolateScope;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<untangled-header untangled-title="Untangled Seed App"></untangled-header>');
        element = $compile(element)(scope);
        scope.$digest();
        isolateScope = element.isolateScope();
    }));


    describe('Directive initialisation', function() {
        it('should set the title on the scope', function() {
            expect(isolateScope.untangledTitle).toBe('Untangled Seed App');
        });
    });

});