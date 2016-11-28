import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details.routing";
import { DetailsComponent } from "./details.component";

@NgModule({
    imports: [
        DetailsRoutingModule
    ],
    declarations: [
        DetailsComponent
    ],
    providers: [],
    bootstrap: []
})
export class DetailsModule {
    constructor() {
        console.log("Details module init");
    }
}