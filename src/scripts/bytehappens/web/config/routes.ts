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
        .state("base", {
          abstract: true,
          url: "",
          templateUrl: "../../templates/base.html"
        })
        .state("base.home", {
          url: "",
          templateUrl: "../../templates/home.html",
          controller: "HomeController as ctrl"
        });
    }
  ]);
}
