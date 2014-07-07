'use strict';

// Declare app level module which depends on filters, and services
angular.module('ommch', [
    'ngRoute',
    'facebook',
    'ommch.filters',
    'ommch.services',
    'ommch.directives',
    'ommch.controllers'
])
.config(['$routeProvider', 'FacebookProvider', function ($routeProvider, FacebookProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/facebook.html', controller: 'FacebookTest'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});

    FacebookProvider.init('1434728606812080');
}]);