import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';
import {MenuComponent} from './app/components/menu.component';

angular
    .module('app', ['ui.router'])
    .config(routesConfig)
    .component("app", AppComponent)
    .component("about", AboutComponent)
    .component("home", HomeComponent)
    .component("menu", MenuComponent);

