(function () {
  'use strict';

  angular
    .module('og.controllers')
    .controller('registerSocialEntityCtrl', registerSocialEntityCtrl);

    registerSocialEntityCtrl.$inject = ['$scope','$state'];

    function registerSocialEntityCtrl($scope, $state) {
      var vm        = this;
      vm.nextStep   = nextStep;
      vm.submit     = submit;
      vm.showError  = showError;
      vm.error      = false;

      function showError(val) {
        vm.error = val;
      }

      function nextStep(objParam) {
        if (objParam) {
          localStorage.setItem('entitie',JSON.stringify(objParam));
          $state.go('register-social-entity-two');
        } 
      }

      function submit() {
        $state.go('dashboard');
      }

    }

})();