import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations: [HomeComponent],
    providers: [],
    bootstrap: []
})
export class HomeModule {
}