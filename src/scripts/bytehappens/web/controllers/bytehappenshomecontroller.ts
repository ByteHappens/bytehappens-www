import * as angular from "angular";

import * as bytehappensrootscopeservice from "../interfaces/ibytehappensrootscopeservice";

namespace ByteHappens.Web.Config {
  class ByteHappensHomeController {
    private static $inject: string[] = ["$rootScope"];

    private readonly _title: string = "Welcome - ByteHappens";

    constructor(private $rootScope: bytehappensrootscopeservice.ByteHappens.Web.Interfaces.IByteHappensRootscopeService) {
      $rootScope.title = this._title;
    }
  }

  angular.module("ByteHappens.Web").controller("ByteHappensHomeController", ByteHappensHomeController);
}
