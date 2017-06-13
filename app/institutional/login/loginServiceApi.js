(function () {
	'use strict';
	angular
	.module('ongbook.services')
	.factory('loginServiceApi',loginServiceApi);

	loginServiceApi.$inject = ['$http','config'];

	function loginServiceApi($http,config) {

		var _auth = function (objParam) {
			return $http.post(config.apiUrl+'auth/local', objParam);
		}

		return {
			auth:_auth	
		}
	}
})();