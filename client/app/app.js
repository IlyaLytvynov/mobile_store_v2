import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import MainPageComponent from "./main/main.component";
import CatalogPageComponent from "./catalog/catalog.component";
import AboutPageComponent from "./about/about.component";
import DetailsPageComponent from "./details/details.component";

import NavbarComponent from "./common/components/navbar/navbar.component";
import CatalogItemComponent from "./common/components/catalog-item/catalog-item.component";

import PhoneModel from "./common/services/phones.model";
import BucketService from "./common/services/bucket.service";
import CommentsModel from "./common/services/comments.model";

import "./variables.styl";
import "./app.styl";

angular.module("client", [uiRouter])
    .constant("enums", {
        baseUrl: "http://localhost:4001/api/v1"
    })
    .config(routerConfig)
    .component("navbar", NavbarComponent)
    .component("catalogItem", CatalogItemComponent)
    .component("main", MainPageComponent)
    .component("catalog", CatalogPageComponent)
    .component("about", AboutPageComponent)
    .component("detailsInfo", DetailsPageComponent)
    .service("phoneModel", PhoneModel)
    .service("commentsModel", CommentsModel)
    .service("bucketService", BucketService)
    .run();
