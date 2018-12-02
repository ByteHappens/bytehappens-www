import * as angular from "angular";

import { BasePageController } from "./basepagecontroller";

class AboutController extends BasePageController {
  private static $inject: string[] = ["$rootScope"];

  constructor(private $rootScope: ICustomRootscopeService) {
    super($rootScope, "About - ByteHappens");
  }
}

angular.module("ByteHappens.Web").controller("AboutController", AboutController);
