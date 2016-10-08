import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { HomeModule} from "./components/home/home.module";
import { AppRouting} from "./components/app.routing";

import { AppComponent }  from "./components/app.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        HomeModule,
        AppRouting
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}