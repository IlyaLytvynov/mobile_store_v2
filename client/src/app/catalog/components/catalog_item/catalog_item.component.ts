/**
 * Created by IlyaLitvinov on 29.11.16.
 */
import { Component, OnInit, Input } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "ms-catalog-item",
    templateUrl: "catalog_item.component.html",
    styleUrls: ["./catalog-item.styl"]
})

export class CatalogItemComponent implements OnInit {
    @Input() phone: any;
    constructor() {
    }

    ngOnInit() {

    }

    
}