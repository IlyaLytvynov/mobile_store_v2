/**
 * Created by IlyaLitvinov on 26.11.16.
 */
import { Component, OnInit } from "@angular/core";
import{ PhoneModel } from "../common/models/phone.model";
import { Response } from "@angular/http";

@Component({
    moduleId: module.id.toString(),
    selector: "ms-catalog",
    styleUrls: [],
    providers: [PhoneModel],
    templateUrl: "catalog.component.html"
})
export class CatalogComponent implements OnInit {
    public items: any;
    constructor(private model: PhoneModel) {
    }

    ngOnInit() {
        this.model.getData().subscribe((resp: Response) => {
           this.items = resp;
        });
        debugger;
        console.log("catlog component init!");
    }

}