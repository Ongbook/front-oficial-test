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
	    .state('register-social-entity', {
	      url: '/cadastro-entidade-social',
	      views: {
	        'content@':{
	          templateUrl: '../templates/register-social-entity/index.html',
	          controller: 'registerSocialEntityIndexCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('register-essential-one', {
	    	parent: 'register-social-entity',
	      url: '/essenciais-1',
	      views: {
	        'register-social-entity@register-social-entity':{
	          templateUrl: '../templates/register-social-entity/form-essential-one/form-essential-one.html',
	          controller: 'registerEssentialOneCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    .state('register-essential-two', {
	    	parent: 'register-social-entity',
	      url: '/essenciais-2',
	      views: {
	        'register-social-entity@register-social-entity':{
	          templateUrl: '../templates/register-social-entity/form-essential-two/form-essential-two.html',
	          controller: 'registerEssentialTwoCtrl',
	          controllerAs: 'vm'
	        }
	      }
	    })
	    ;
	    $urlRouterProvider.otherwise('/');
	  }]);
})();