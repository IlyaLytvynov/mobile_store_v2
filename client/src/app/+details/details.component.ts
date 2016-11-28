/**
 * Created by IlyaLitvinov on 26.11.16.
 */
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "ms-details",
    templateUrl: "details.component.html"
})
export class DetailsComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log("Details component init!");
    }

}