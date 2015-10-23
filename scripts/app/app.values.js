(function(){

    'use strict';

    var appValues = {
        // Add the menu items in the order you want them displayed
        menuItems: [{
            title: 'Home',
            href: '/home'
        },
        {
            title: 'About',
            href: '/about'
        }]
    };

    angular
        .module('app')
        .value('appValues', appValues);

})();