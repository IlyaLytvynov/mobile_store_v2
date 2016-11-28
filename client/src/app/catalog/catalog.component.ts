/**
 * Created by IlyaLitvinov on 26.11.16.
 */
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "ms-catalog",
    templateUrl: "catalog.component.html"
})
export class CatalogComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("catlog component init!");
    }

}