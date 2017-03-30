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
	    .state('register-social-entity', {
	      url: '/cadastro',
	      views: {	        
	          '@':{
          		templateUrl: '../templates/register-social-entity/form-essential-one/index.html',
		          controller: 'registerSocialEntityCtrl',
		          controllerAs: 'vm'	        
	          }
	      }
	    })
	    .state('register-social-entity-two', {
	      url: '/cadastro',
	      views: {
	        '@':{
	          templateUrl: '../templates/register-social-entity/form-essential-two/index.html',
	          controller: 'registerSocialEntityCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
     	.state('dashboard', {
	      url: '/dashboard',
	      views:{
	        '@':{
	          templateUrl: '../templates/dashboard/index.html',
	          controller: 'registerSocialEntityCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    ;
	    $urlRouterProvider.otherwise('/');
	  }]);
})();