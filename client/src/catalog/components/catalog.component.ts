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
    public data: any[];

    constructor (private model: PhoneService) {
        this.model.fetchAll().subscribe((resp) => {
            this.data = resp;
        }, (err) => {
            debugger;
        });
    }
}