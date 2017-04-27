(function () {
	'use strict';
	angular
	.module('og.services')
	.factory('entitiesServiceApi',entitiesServiceApi);

	entitiesServiceApi.$inject = ['$http','config'];

	function entitiesServiceApi($http,config) {

		var _getEntities = function () {
			return $http.get(config.apiUrl+'entidades');
		};

		var _setEntities = function (objParam) {
			return $http.post(config.apiUrl+'entidades',objParam);
		};

		var _registerUser = function (objParam) {
			return $http.post(config.apiUrl+'auth/local/register', objParam);
		};

		var _registerEntitie = function (objParam) {
			return $http.post(config.apiUrl+'ngo', objParam);
		};

		var _isLogged = function (objParam) {
			if(localStorage.getItem('jwt'))
				return localStorage.getItem('jwt') ? true : false;			
		};

		return {
			getEntities:_getEntities,
			setEntities:_setEntities,
			registerUser:_registerUser,
			registerEntitie:_registerEntitie,
			isLogged:_isLogged
		};
	}
})();