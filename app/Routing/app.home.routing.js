var HomeRouting = function($routeProvider) {
    $routeProvider.caseInsensitiveMatch = true;
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
        redirectTo: '404'
    });
}

HomeRouting.$inject = ['$routeProvider']