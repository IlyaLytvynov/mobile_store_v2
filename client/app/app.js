import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import MainPageComponent from "./main/main.component";
import CatalogPageComponent from "./catalog/catalog.component";

import "./variables.styl";

angular.module("client", [uiRouter])
    .config(routerConfig)
    .component("main", MainPageComponent)
    .component("catalog", CatalogPageComponent)
    .run();
