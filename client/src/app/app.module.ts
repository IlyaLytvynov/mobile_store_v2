import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { CatalogModule} from "../catalog/catalog.module";
import { AppRouting} from "./app.routing";

import { AppComponent }  from "./app.component";
import { CommonModule }  from "../common/common.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CatalogModule,
        CommonModule,
        AppRouting
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}