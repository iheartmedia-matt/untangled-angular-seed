(function(){
    'use strict';

    angular
        .module('app')
        .controller('appController', appController)

    appController.$inject = ['appValues'];

    function appController(appValues){

        var vm = this;

        vm.menuItems = appValues.menuItems;
    }
})();