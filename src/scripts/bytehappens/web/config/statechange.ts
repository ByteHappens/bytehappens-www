import * as angular from "angular";

angular.module("ByteHappens.Web").run([
  "$rootScope",
  ($rootScope: ICustomRootscopeService) => {
    $rootScope.$on("$stateChangeStart", () => {});

    $rootScope.$on("$stateChangeSuccess", () => {});
  }
]);
