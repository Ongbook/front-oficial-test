(function () {
	'use strict';

	angular
		.module('ongbook')
		.config(['$locationProvider','$urlRouterProvider','$stateProvider', '$authProvider',
		function($locationProvider,$urlRouterProvider,$stateProvider, $authProvider){
		$locationProvider.html5Mode(true);

		$authProvider.github({
      clientId: '1597166d73b1db413ff2'
    });

		$stateProvider
	    .state('home', {
	      url: '/',
	      views:{
	        '@':{
	          templateUrl: '../templates/home/home.html',
	          controller: 'homeCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('login', {
	      url: '/login',
	      views:{
	        '@':{
	          templateUrl: '../templates/login/login.html',
	          controller: 'loginCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
     	.state('dashboard', {
	      url: '/dashboard',
	      views:{
	        '@':{
	          templateUrl: '../templates/dashboard/index.html',
	          controller: 'dashboardCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('new-entitie', {
	      url: '/dashboard/entidade',
          // templateUrl: '../templates/dashboard/dashboard/entities/entitie.html',
          controller: 'entitiesCtrl',
          controllerAs: 'vm'
	    })
	    ;
	    $urlRouterProvider.otherwise('/');
	  }]);
})();
