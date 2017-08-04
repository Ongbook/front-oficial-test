(function() {
		'use strict';
		angular.module('ongbook.services')
			   .factory('authUserService', authUserService);

		authUserService.$inject = ['$auth', '$state','sessionControlService','$http'];

		function authUserService($auth, $state, sessionControlService, $http) {

			var cacheSession = function(email, username) {
				sessionControlService.setUser('userIsLogin', true);
				sessionControlService.setUser('email', email);
				sessionControlService.setUser('username', username);
			};

			var unCacheSession = function() {
				sessionControlService.unsetUser('userIsLogin');
				sessionControlService.unsetUser('email');
				sessionControlService.unsetUser('username');
				sessionControlService.unsetUser('token');
				localStorage.clear();
			};

			var _getToken =  function () {
				console.log(sessionControlService.getItem('token'));
				return sessionControlService.getItem('token');
			};

			return {

				isLoggedIn: function() {
					 return sessionControlService.getItem('token') !== null;
				},
				logout: function() {
					$state.transitionTo("home");
					return unCacheSession();
				},
				getToken: _getToken
			};
		}

})();
