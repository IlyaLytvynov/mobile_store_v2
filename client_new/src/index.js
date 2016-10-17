import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';
import {MenuComponent} from './app/components/menu.component';
import {PreviewComponent} from './app/home/preview.component';
import PhonesModel from './app/common/services/phones.service';


import MakeRedDirective from './app/home/directives/makeRed.directive';

angular
    .module('app', ['ui.router'])
    .config(routesConfig)
    .service("phonesModel", PhonesModel)
    .directive("makeRed", MakeRedDirective)
    .component("app", AppComponent)
    .component("about", AboutComponent)
    .component("home", HomeComponent)
    .component("preview", PreviewComponent)
    .component("menu", MenuComponent);

