(function () {
  'use strict';

  angular
  .module('og.controllers')
  .controller('registerInstitutionalCtrl', registerInstitutionalCtrl, '$state');

  registerInstitutionalCtrl.$inject = ['$state'];

  function registerInstitutionalCtrl($state) {
    var vm = this;
    vm.stateGoPrevious = stateGoPrevious;

    function stateGoPrevious() {
      $state.go('register-essential-two');
    }

  }

})();