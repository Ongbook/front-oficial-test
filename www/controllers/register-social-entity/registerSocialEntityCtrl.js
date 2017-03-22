(function () {
  'use strict';

  angular
    .module('og.controllers')
    .controller('registerSocialEntityCtrl', registerSocialEntityCtrl);

    registerSocialEntityCtrl.$inject = [];

    function registerSocialEntityCtrl() {
      var vm = this;
      console.log('load controller');
    }

})();