import * as angular from "angular";
import * as angularui from "@uirouter/angularjs";

namespace ByteHappens.Web.App.Config {
  let app = angular.module("ByteHappens.Web");

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    ($stateProvider: angularui.StateProvider, $urlRouterProvider: angularui.UrlRouterProvider) => {
      $urlRouterProvider.otherwise("/");

      $stateProvider.state("root", {
        url: "",
        template: `
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h1>Welcome to ByteHappens !</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <p>
        You are currently looking at a default parking page for this website. Please come back later to see if anything new has been added to this site.
      </p>
    </div>
  </div>
</div>`,
        controller: "ByteHappensHomeController as ctrl"
      });
    }
  ]);
}
