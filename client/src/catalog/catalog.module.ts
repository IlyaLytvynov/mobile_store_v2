import { NgModule } from "@angular/core";
import { CatalogRoutingModule } from "./catalog.routing";
import { CatalogComponent } from "./components/catalog.component";
import { CommonModule } from "../common/common.module";
import { PhoneService } from "../common/services/phones.service";
@NgModule({
    imports: [
        CatalogRoutingModule,
        CommonModule
    ],
    declarations: [CatalogComponent],
    providers: [],
    bootstrap: []
})
export class CatalogModule {
}