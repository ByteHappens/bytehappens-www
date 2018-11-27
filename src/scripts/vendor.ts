//  EBU: Importing styles, not a fan of this
import "../styles/vendor.scss";

//  EBU: Importing common librairies
import "jquery";
import "popper.js";
import "bootstrap";

import "angular";
import "@uirouter/angularjs";

import "./bytehappens/web/templates.js";
import "./bytehappens/web/interfaces/ibytehappensrootscopeservice";

import "./bytehappens/web/app";
import "./bytehappens/web/config/routes";
import "./bytehappens/web/config/statechange";

import "./bytehappens/web/controllers/headercontroller";
import "./bytehappens/web/controllers/footercontroller";
import "./bytehappens/web/controllers/homecontroller";