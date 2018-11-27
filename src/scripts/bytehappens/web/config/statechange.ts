import * as angular from "angular";

import * as bytehappensrootscopeservice from "../interfaces/ibytehappensrootscopeservice";

namespace ByteHappens.Web.Config {
  let app = angular.module("ByteHappens.Web");

  app.run([
    "$rootScope",
    ($rootScope: bytehappensrootscopeservice.ByteHappens.Web.Interfaces.IByteHappensRootscopeService) => {
      $rootScope.$on("$stateChangeStart", () => {});

      $rootScope.$on("$stateChangeSuccess", () => {});
    }
  ]);
}
