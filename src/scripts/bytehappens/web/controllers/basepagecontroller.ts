export abstract class BasePageController {
  constructor($rootScope: IByteHappensRootscopeService, pageTitle: string) {
    $rootScope.pageTitle = pageTitle;
  }
}
