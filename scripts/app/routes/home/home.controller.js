(function(){
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    angular.$inject = ['APP_CONSTANTS'];

    function HomeController(APP_CONSTANTS){

        var vm = this;

        vm.title = APP_CONSTANTS.title;
    }
})();