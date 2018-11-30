import * as angular from "angular";

class HomeController extends BasePageController {
  private static $inject: string[] = ["$rootScope"];

  private readonly _title: string = "Home - ByteHappens";

  constructor(private $rootScope: IByteHappensRootscopeService) {
    super($rootScope);
    $rootScope.pageTitle = this.GetTitle();
  }

  protected GetTitle(): string {
    return this._title;
  }
}

angular.module("ByteHappens.Web").controller("HomeController", HomeController);
