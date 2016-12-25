import angular from "angular";
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import {MainPageComponent} from './main/main.component';

import "./variables.styl";
import "./app.styl";


angular.module("client", [
    uiRouter,
    ngMaterial
    ])
    .component('mainPage', MainPageComponent);
