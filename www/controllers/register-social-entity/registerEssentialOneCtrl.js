(function () {
  'use strict';

  angular
  .module('og.controllers')
  .controller('registerEssentialOneCtrl', registerEssentialOneCtrl, '$state');

  registerEssentialOneCtrl.$inject = ['$state'];

  function registerEssentialOneCtrl($state) {
    var vm = this;
    vm.stateGo = stateGo;

    function stateGo() {
      $state.go('register-essential-two');
    }



  }

})();