import angular from "angular";
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import routerConfig from './app.routes';

import {MainPageComponent} from './main/main.component';
import {AboutPageComponent} from './about/about.component';
import {CatalogPageComponent} from './catalog/catalog.component';
import {NavbarComponent} from './common/widgets/navbar/navbar.component';
import {DetailsPageComponent} from './details/details.component';

import {PhoneService} from './common/services/phone.service';


import "./variables.styl";
import "./app.styl";


angular.module("client", [
    uiRouter
    ])
    .component('mainPage', MainPageComponent)
    .component('aboutPage', AboutPageComponent)
    .component('catalogPage', CatalogPageComponent)
    .component('detailsPage', DetailsPageComponent)
    .component('navbar', NavbarComponent)
    .service('phoneService', PhoneService)
    .config(routerConfig);