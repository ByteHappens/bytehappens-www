import * as angular from "angular";
import * as angularui from "@uirouter/angularjs";

namespace ByteHappens.Web.Config {
  let app = angular.module("ByteHappens.Web");

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    ($stateProvider: angularui.StateProvider, $urlRouterProvider: angularui.UrlRouterProvider) => {
      $urlRouterProvider.otherwise("");

      $stateProvider
        .state("app", {
          abstract: true,
          url: "",
          templateUrl: "../../templates/_app.html"
        })
        .state("app.home", {
          url: "",
          templateUrl: "../../templates/home.html",
          controller: "HomeController as ctrl"
        });
    }
  ]);
}
