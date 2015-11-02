describe('Footer Directive: untangledFooter', function() {

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
        createDirective($scope, '<untangled-footer></untangled-footer>');
    });

    function createDirective(scope, directiveCreationHTML){
        element = angular.element(directiveCreationHTML);
        element = $compile(element)(scope);
        scope.$digest();

        isolateScope = element.isolateScope();
        return element;
    }


    describe('Directive initialisation', function() {

        it('should ')
    });

});