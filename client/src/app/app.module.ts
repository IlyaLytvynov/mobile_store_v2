import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import { FormsModule }   from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

// import { AppRouting} from "./app.routing";
import { SharedModule } from "./shared_components/shared.module";
import {CatalogModule} from "./catalog/catalog.module";
import {AppRouting} from "./app.routing";

import {AppComponent} from "./app.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpModule,
        JsonpModule,
        CatalogModule,
        AppRouting,
        SharedModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
