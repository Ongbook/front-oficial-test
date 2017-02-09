(function () {
  'use strict';

  angular
  .module('og.controllers')
  .controller('registerEssentialTwoCtrl', registerEssentialTwoCtrl, '$state');

  registerEssentialTwoCtrl.$inject = ['$state'];

  function registerEssentialTwoCtrl($state) {
    var vm = this;
    vm.stateGoNext = stateGoNext;
    vm.stateGoPrevious = stateGoPrevious;

    function stateGoNext() {
      $state.go('register-institutional');
    }

    function stateGoPrevious() {
      $state.go('register-essential-one');
    }

  }

})();