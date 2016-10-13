angular.module("cocoChannel",
 ["ui.router",
 "ngResource",
 "app.controllers",
 "app.services",
 "app.directives",
 "ngMaterial",
 "ngAnimate",
 "ngTouch"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'partials/home.html',
      controller : 'homeController'
    })
    .state('home.start',{
      url: '/start',
      templateUrl: 'partials/start.html',
      controller: 'startController'
    })
    .state('home.events',{
      url: '/events',
      templateUrl: 'partials/events.html'
    })
    .state('home.news',{
      url: '/news',
      templateUrl: 'partials/news.html'
    })
    .state('home.photos',{
      url: '/photos',
      templateUrl: 'partials/photos.html'
    })
    .state('home.videos',{
      url: '/videos',
      templateUrl: 'partials/videos.html'
    })
    .state('home.about',{
      url: '/about',
      templateUrl: 'partials/about.html'
    });

    $urlRouterProvider.otherwise('/home/start');
});