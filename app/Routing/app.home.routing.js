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
    when('/about', {
        templateUrl: 'pages/about.html',
        controller: ''
    }).
    when('/terms', {
        templateUrl: 'pages/terms.html',
        controller: ''
    }).
    when('/withUs', {
        templateUrl: 'pages/withUs.html',
        controller: ''
    }).
    when('/contacts', {
        templateUrl: 'pages/contacts.html',
        controller: ''
    }).
    when('/faq', {
        templateUrl: 'pages/faq.html',
        controller: ''
    }).
    when('/delivery', {
        templateUrl: 'pages/delivery.html',
        controller: ''
    }).
    when('/shipment', {
        templateUrl: 'pages/shipment.html',
        controller: ''
    }).
    when('/refund', {
        templateUrl: 'pages/refund.html',
        controller: ''
    }).
    otherwise({
        redirectTo: '404'
    });
}

HomeRouting.$inject = ['$routeProvider']