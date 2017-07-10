(function () {
	'use strict';
	angular
	.module('ongbook.services')
	.factory('loginServiceApi',loginServiceApi);

	loginServiceApi.$inject = ['config','$q'];

	function loginServiceApi(config, $q) {

		var _auth = function ( data ) {
			return $http.post(config.apiUrl+'auth/local', data);
		};

		var _singUp = function ( data ) {
			$http.post( config.apiUrl + 'ngos', data );
		};

		var _setToken = function ( data ) {
			localStorage.setItem('jwt', data);
		};

		var _getToken = function ( data ) {
			return localStorage.getItem('jwt');
		};

		var _logout = function () {
			localStorage.removeItem('jwt');
			$q.when();
		};
		return {
			auth:_auth,
			logout:_logout,
			singUp:_singUp,
			setToken:_setToken,
			getToken:_getToken
		};
	}
})();
