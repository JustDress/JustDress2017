var APP = angular.module('justDressApp', ['ngRoute', 'ngStorage','app.config','app.proxy','AppControllers']);

APP.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/all_products.html',
        controller: 'controllerHome'
      }).
      otherwise({
        redirectTo: '/404'
      });

    }
  ])
