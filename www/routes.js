(function () {
	'use strict';

	angular
		.module('ongbook')
		.config(['$locationProvider','$urlRouterProvider','$stateProvider',
		function($locationProvider,$urlRouterProvider,$stateProvider){
		$locationProvider.html5Mode(true);
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
          templateUrl: '../templates/dashboard/dashboard/entities/entitie.html',
          controller: 'entitiesCtrl',
          controllerAs: 'vm'	       
	    })
	    ;
	    $urlRouterProvider.otherwise('/');
	  }]);
})();