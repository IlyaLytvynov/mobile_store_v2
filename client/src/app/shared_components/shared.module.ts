import { NgModule } from "@angular/core";
import {AppRouting} from "../app.routing";

import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    imports: [
        AppRouting
    ],
    declarations: [
        NavbarComponent
    ],
    providers: [],
    bootstrap: [],
    exports: [
        NavbarComponent
    ]
})
export class SharedModule {
    constructor() {
        console.log("catalog module init");
    }
}