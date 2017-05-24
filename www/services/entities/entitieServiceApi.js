(function () {
	'use strict';
	angular
	.module('og.services')
	.factory('entitieServiceApi',entitieServiceApi);

	entitieServiceApi.$inject = ['$http','config','viaCEP'];

	function entitieServiceApi($http,config) {

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
			localStorage.setItem('address',address);
			return true;
		};

		var _getStatus = function () {
			return localStorage.getItem('status');
		};
		return {
			getCep: 				_getCep,
			setEntitie: 		_setEntitie,
			setFullAddress: _setFullAddress,
			getAddress:			_getAddress,
			getStatus: 			_getStatus
		};
	}
})();
