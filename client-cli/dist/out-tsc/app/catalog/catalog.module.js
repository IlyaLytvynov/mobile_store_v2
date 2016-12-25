var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRouting } from './catalog.routes';
export var CatalogModule = (function () {
    function CatalogModule() {
    }
    CatalogModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CatalogRouting
            ],
            declarations: [CatalogComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CatalogModule);
    return CatalogModule;
}());
//# sourceMappingURL=/Users/IlyaLitvinov/Projects/mobile_store/client-cli/src/app/catalog/catalog.module.js.map