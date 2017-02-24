(function () {
    "use strict";
    angular
    .module("testModule", ["baseModule"])
    .controller("testController", testController);
    function testController() {
        var vm = this;

    }
})();