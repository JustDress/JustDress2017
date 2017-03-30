var AppModule = angular.module('justDressApp', ['ngRoute', 'ngStorage']);

//AppControllers
AppModule.controller('layoutController', LayoutController);
AppModule.controller('homeController', HomeController);

//AppServices

//AppFactories
AppModule.factory('RestClient', RestClient);

//AppComponents

//Routing
AppModule.config(HomeRouting);

//Settings
AppModule.constant('config', {
    endpoint: 'http://localhost:4000/api'
});