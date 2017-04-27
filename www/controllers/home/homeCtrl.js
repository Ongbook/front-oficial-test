(function () {
	'use strict';

	angular
		.module('og.controllers')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$http', '$scope', '$uibModal'];

	function homeCtrl($http, $scope, $uibModal) {
		var vm = this;
		vm.developWithUs = developWithUs;
		vm.spread = spread;
		vm.foment = foment;

		function developWithUs() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/develop.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		};

		function spread() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/spread.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		};

		function foment() {
			var modalInstance = $uibModal.open({
				templateUrl: '../../../templates/home/support-modals/foment.html',
				size: 'md',
				backdrop: false,
				controller: function ($uibModalInstance) {
					var modal = this;
					modal.cancel = cancel;

					function cancel() {
						modalInstance.close();
					}

				},
				controllerAs: 'modal'
			});
		};

		// fullPage.js
		vm.mainOptions = {
			navigation: true,
			anchors: ['mapa', 'queremosefazemos', 'responsavelporumaong', 'apoie', 'parceiros', 'contato'],
			navigationPosition: 'right',
			scrollingSpeed: 1000
		};
	}

})();