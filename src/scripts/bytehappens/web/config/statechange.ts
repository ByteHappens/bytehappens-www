import * as angular from "angular";

namespace ByteHappens.Web.App.Config {
  let app = angular.module("ByteHappens.Web");

  app.run([
    "$rootScope",
    ($rootScope: angular.IRootScopeService) => {
      $rootScope.$on("$stateChangeStart", () => {});

      $rootScope.$on("$stateChangeSuccess", () => {});
    }
  ]);
}
