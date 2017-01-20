import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import "./variables.styl";
import "./app.styl";

angular.module("client", [uiRouter])
    .constant("enums", {
        baseUrl: "http://localhost:4001/api/v1"
    })
    .config(routerConfig)
    .run();
