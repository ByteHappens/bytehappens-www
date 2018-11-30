import * as angular from "angular";

class AboutController extends BasePageController {
  private static $inject: string[] = ["$rootScope"];

  private readonly _title: string = "About - ByteHappens";

  constructor(private $rootScope: IByteHappensRootscopeService) {
    super($rootScope);
    $rootScope.pageTitle = this._title;
  }

  protected GetTitle(): string {
    return this._title;
  }
}

angular.module("ByteHappens.Web").controller("AboutController", AboutController);
