import { NgModule } from "@angular/core";
import { CatalogComponent } from "./catalog.component";

@NgModule({
    imports: [],
    declarations: [CatalogComponent],
    providers: [],
    bootstrap: []
})
export class CatalogModule {
    constructor() {
        console.log("catalog module init");
    }
}