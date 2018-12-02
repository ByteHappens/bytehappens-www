//  EBU: Importing styles, not a fan of this
import "../styles/vendor.scss";

//  EBU: Importing common librairies
import "jquery";
import "popper.js";
import "bootstrap";

import "@uirouter/angularjs";

import "./bytehappens/web/templates.js";

import "./bytehappens/web/app";

import "./bytehappens/web/interfaces/icustomrootscopeservice";

import "./bytehappens/web/controllers/layout/headercontroller";
import "./bytehappens/web/controllers/layout/footercontroller";

import "./bytehappens/web/controllers/homecontroller";
import "./bytehappens/web/controllers/aboutcontroller";

import "./bytehappens/web/config/routes";
import "./bytehappens/web/config/statechange";
