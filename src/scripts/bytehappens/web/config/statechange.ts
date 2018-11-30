import * as angular from "angular";

angular.module("ByteHappens.Web").run([
  "$rootScope",
  ($rootScope: IByteHappensRootscopeService) => {
    $rootScope.$on("$stateChangeStart", () => {});

    $rootScope.$on("$stateChangeSuccess", () => {});
  }
]);
