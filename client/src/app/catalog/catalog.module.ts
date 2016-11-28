import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import { CatalogRoutingModule } from "./catalog.routing";
import { CatalogComponent } from "./catalog.component";
import { CatalogItemComponent} from "./components/catalog_item/catalog_item.component";




@NgModule({
    imports: [
        CatalogRoutingModule,
        CommonModule,
        BrowserModule
    ],
    declarations: [
        CatalogComponent,
        CatalogItemComponent
    ],
    providers: [],
    bootstrap: []
})
export class CatalogModule {
    constructor() {
        console.log("catalog module init");
    }
}