import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import MainPageComponent from "./main/main.component";
import CatalogPageComponent from "./catalog/catalog.component";
import AboutPageComponent from "./about/about.component";

import NavbarComponent from "./common/components/navbar/navbar.component";
import PhoneComponent from "./common/components/phone/phone.component";

import PhoneModel from "./common/services/phones.model";

import "./variables.styl";
import "./app.styl";

angular.module("client", [uiRouter])
    .constant("enums", {
        baseUrl: "http://localhost:4001/api/v1"
    })
    .config(routerConfig)
    .component("navbar", NavbarComponent)
    .component("phone", PhoneComponent)
    .component("main", MainPageComponent)
    .component("catalog", CatalogPageComponent)
    .component("about", AboutPageComponent)
    .service("phoneModel", PhoneModel)
    .run();
