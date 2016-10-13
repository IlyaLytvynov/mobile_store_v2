/**
 * Created by IlyaLitvinov on 05.10.16.
 */
import { Component } from "@angular/core";
import { PhoneService} from "../../common/services/phones.service";

@Component({
    selector: "ms-catalog",
    templateUrl: "../views/catalog.component.html",
    styleUrls: ["../catalog.styl"]
})

export class CatalogComponent {
    constructor (private t: PhoneService) {
        console.log(`from Catalog ${this.t.toCount()}`);
        console.log(`from catalog ${this.t.toCount()}`);
        console.log(`from catalog ${this.t.toCount()}`);
    }
}