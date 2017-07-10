(function () {
	'use strict';

	angular
		.module('ongbook.services')
		.factory('loginAPIService', loginAPIService);

	loginAPIService.$inject = ['$http', 'config', '$auth', 'sessionControlService'];

	function loginAPIService($http, config, $auth, sessionControlService) {

		function _login(objParam) {

			return $auth.login(objParam)
				.then(function (result) {
					if (result.status === 200){
						localStorage.setItem('token', result.data.jwt);
						console.log(result);
					} else {
						localStorage.removeItem('token');
					}
					return result.status;
				})
				.catch(function (err) {
					return console.log("erro no service login", err);
				});
		}


		var _logout = function () {
			sessionControlService.removeItem('token');
		};



		return {
			login: _login,
			logout: _logout
		};

	}
})();
