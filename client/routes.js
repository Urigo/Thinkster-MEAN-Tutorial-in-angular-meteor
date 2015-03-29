angular.module('flapperNews').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'client/views/home.ng.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'client/views/posts.ng.html',
        controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }]);