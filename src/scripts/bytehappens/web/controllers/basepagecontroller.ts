export abstract class BasePageController {
  constructor($rootScope: IByteHappensRootscopeService, pageTitle: string) {
    $rootScope.pageTitle = pageTitle;
    console.log($rootScope.pageTitle);
  }
}
