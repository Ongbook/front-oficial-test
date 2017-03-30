(function () {
  'use strict';

  angular
    .module('og.controllers')
    .controller('registerSocialEntityCtrl', registerSocialEntityCtrl);

    registerSocialEntityCtrl.$inject = ['$scope','$state'];

    function registerSocialEntityCtrl($scope, $state) {
      var vm = this;
      vm.nextStep = nextStep;
      vm.submit = submit;

      function nextStep(paramCad) {
        $state.go('register-social-entity-two');        
      }

      function submit() {
        $state.go('dashboard');
      }

    }

})();