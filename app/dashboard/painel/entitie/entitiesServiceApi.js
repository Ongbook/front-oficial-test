(function () {
	'use strict';
	angular
	.module('ongbook.services')
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

			var _getCep = function (cep,type) {
			return $http.get(config.cep+cep+'/'+type);
		};

		var _setEntitie = function (cep) {
			localStorage.setItem('address',cep);
		};

		var _getAddress = function () {
			var _address = localStorage.getItem('address');
			return _address;

		};
		var _setFullAddress =	function (address) {
			localStorage.removeItem('address');
			localStorage.setItem('entitie',address);
			return true;
		};

		var _getStatus = function () {
			return localStorage.getItem('status');
		};

		var _setEntitieFullRegister = function (entitie) {
			return localStorage.setItem('entitie',entitie);
		};
		var _getEntitieFullRegister = function (entitie) {
			return localStorage.getItem('entitie');
		};

		return {
			setFullAddress:_setFullAddress,
			getAddress:_getAddress,
			setEntitie:_setEntitie,
			getCep:_getCep,
			getEntities:_getEntities,
			setEntities:_setEntities,
			registerUser:_registerUser,
			registerEntitie:_registerEntitie,
			isLogged:_isLogged,
			setEntitieFullRegister:_setEntitieFullRegister,
			getEntitieFullRegister:_getEntitieFullRegister
		};
	}
})();
