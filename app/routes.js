(function () {
	'use strict';

	angular
		.module('ongbook')
		.config(['$locationProvider','$urlRouterProvider','$stateProvider','$authProvider','$qProvider',
		function($locationProvider, $urlRouterProvider, $stateProvider, $authProvider, $qProvider){
			// ui router bug
			$qProvider.errorOnUnhandledRejections(false);
			$locationProvider.html5Mode(true);
			$authProvider.loginUrl = "https://ongbook-api-strapi-dev.herokuapp.com/auth/local";
			$stateProvider
		    .state('institutional', {
		      url: '/',
	        templateUrl: '../app/institutional/institutional.html',
	        controller: 'institutionalController',
	        controllerAs: 'vm'

		    })
		    .state('login', {
		      url: '/login',
	        templateUrl: '../app/institutional/login/login.html',
	        controller: 'loginController',
	        controllerAs: 'vm'
		    })
	     	.state('dashboard',{
	     		url:'/dashboard',
	     		views: {
	     			'': {
	     				templateUrl : '../app/dashboard/dashboard.html',
	     			},
	     			'registerOne@dashboard': { templateUrl:'../app/dashboard/painel/register/registerOne.html', controller: 'dashboardController'}
	     		}
	     	})
	     	.state('entitie',{
	     		url: '/entitie',
	     		views: {
	     			'':{
	     				templateUrl: '../app/dashboard/painel/entitie/entitie.html', controller: 'entitieController'
	     			}
	     		}
	     	})
	     	.state('necessity',{
	     		url: '/necessity',
	     		views: {
	     			'':{
	     				templateUrl: '../app/dashboard/painel/necessity/necessity.html', controller: 'necessityController'
	     			}
	     		}
	     	})
	     	.state('painel',{
	     		url: '/painel',
	     		views: {
	     			'':{
	     				templateUrl: '../app/dashboard/painel/painel.html', controller: 'painelController'
	     			}
	     		}
	     	})
		  	//   .state('new-entitie', {
		  	//     url: '/dashboard/entidade',
				// 	templateUrl: '../templates/dashboard/dashboard/entities/entitie.html',
				// 	controller: 'entitiesCtrl',
				// 	controllerAs: 'vm'
		  	//   })

				// .state('erro', {
				// 	url:'/error',
				// 	templateUrl:'../templates/navbar-institucional/erro404.html',
				// 	controller: 'homeCtrl',
				// 	controllerAs: 'vm'
				// })
		    ;
		    $urlRouterProvider.otherwise('/');
	  }]);
})();
