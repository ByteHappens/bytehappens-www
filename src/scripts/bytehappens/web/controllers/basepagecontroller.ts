abstract class BasePageController {
  constructor($rootScope: IByteHappensRootscopeService) {
    $rootScope.pageTitle = this.GetTitle();
  }

  protected abstract GetTitle(): string;
}
