(function () {
	'use strict';

	angular
		.module('ongbook')
		.config(['$routeProvider','$locationProvider','$urlRouterProvider','$stateProvider',function($routeProvider,$locationProvider,$urlRouterProvider,$stateProvider){
		$locationProvider.html5Mode(true);
		$stateProvider
	    .state('home', {
	      url: '/',
	      views:{
	        'content@':{
	          templateUrl: '../templates/home/home.html',
	          controller: 'homeCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('dashboard', {
	      url: '/dashboard',
	      views:{
	        'content@':{
	          templateUrl: '../templates/dashboard/index.html',
	          controller: 'dashboardCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('welcome', {
	      parent: 'dashboard',
	      url: '/',
	      views: {
	        'dashboard@dashboard':{
	          templateUrl: '../templates/dashboard/welcome/welcome.html',
	          controller: 'dashboardCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('entities', {
	      parent: 'dashboard',
	      url: '/entidades',
	      views: {
	        'dashboard@dashboard':{
	          templateUrl: '../templates/dashboard/entities/entities.html',
	          controller: 'entitiesCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('config', {
	      parent: 'dashboard',
	      url: '/config',
	      views: {
	        'dashboard@dashboard':{
	          templateUrl: '../templates/dashboard/config/config.html',
	          controller: 'configCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    ;
	    $urlRouterProvider.otherwise('/');
	  }]);
})();