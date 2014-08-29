angular.module('pages', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pages').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'pages/partial/home/home.html'});
    $routeProvider.when('/store',{templateUrl: 'pages/partial/store/store.html'});
    /* Add New Routes Above */

});

