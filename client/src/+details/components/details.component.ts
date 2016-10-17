/**
 * Created by IlyaLitvinov on 10.10.16.
 */
/// <reference path="../../../typings/index.d.ts"/>
import { Component, OnInit } from "@angular/core";
import { PhoneService} from "../../common/services/phones.service";

@Component({
    selector: "ms-details",
    templateUrl: "../views/details.component.html"
})
export class DetailsComponent implements OnInit {
    constructor(private t: PhoneService) {
        console.log("Details page");
        console.log(`from details ${this.t.toCount()}`);
        console.log(`from details ${this.t.toCount()}`);
        console.log(`from details ${this.t.toCount()}`);
    }

    ngOnInit() { }
}