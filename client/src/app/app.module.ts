import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";
// import { AppRouting} from "./app.routing";

import {CatalogModule} from "./catalog/catalog.module";

import {AppComponent} from "./app.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CatalogModule
        // RouterModule.forRoot([
        //     {path: "", component: ListComponent},
        // ])
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
