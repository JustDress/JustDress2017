var AppModule = angular.module('justDressApp', ['ngRoute', 'ngStorage']);

//AppControllers
AppModule.controller('homeController', HomeController);

//AppServices

//AppFactories
AppModule.factory('RestClient', RestClient);

//AppComponents

//Routing
AppModule.config(HomeRouting);

//Settings
AppModule.constant('config',{
    endpoint: 'http://localhost:4000/api'
});

var app = AppModule;
app.config(
            function ($controllerProvider, $provide, $compileProvider) {
                // Since the "shorthand" methods for component
                // definitions are no longer valid, we can just
                // override them to use the providers for post-
                // bootstrap loading.
                console.log("Config method executed.");
                // Let's keep the older references.
                app._controller = app.controller;
                app._service = app.service;
                app._factory = app.factory;
                app._value = app.value;
                app._directive = app.directive;
                // Provider-based controller.
                app.controller = function (name, constructor) {
                    $controllerProvider.register(name, constructor);
                    return (this);
                };
                // Provider-based service.
                app.service = function (name, constructor) {
                    $provide.service(name, constructor);
                    return (this);
                };
                // Provider-based factory.
                app.factory = function (name, factory) {
                    $provide.factory(name, factory);
                    return (this);
                };
                // Provider-based value.
                app.value = function (name, value) {
                    $provide.value(name, value);
                    return (this);
                };
                // Provider-based directive.
                app.directive = function (name, factory) {
                    $compileProvider.directive(name, factory);
                    return (this);
                };
            }
        );