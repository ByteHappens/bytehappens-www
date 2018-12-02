import * as angular from "angular";

import { BasePageController } from "./basepagecontroller";

class HomeController extends BasePageController {
  private static $inject: string[] = ["$rootScope"];

  constructor(private $rootScope: IByteHappensRootscopeService) {
    super($rootScope, "Home - ByteHappens");
  }
}

angular.module("ByteHappens.Web").controller("HomeController", HomeController);
