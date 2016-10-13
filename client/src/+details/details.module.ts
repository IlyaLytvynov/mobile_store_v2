import { NgModule } from "@angular/core";
import { DetailsRoutingModule } from "./details.routing";
import { DetailsComponent } from "./components/details.component";
import { CommonModule } from "../common/common.module";
// import { PhoneService } from "../common/services/phones.service";

@NgModule({
    imports: [
        DetailsRoutingModule,
        CommonModule
    ],
    declarations: [DetailsComponent],
    providers: [],
    bootstrap: []
})
export class DetailsModule {
}