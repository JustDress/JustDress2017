var HomeRouting = function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    }).
    //TODO - Login
    when('/login', {
      templateUrl: 'pages/login.html',
      controller: 'loginController'
    }).
    otherwise({
      redirectTo: 'pages/home'
    });
}

HomeRouting.$inject = ['$routeProvider']