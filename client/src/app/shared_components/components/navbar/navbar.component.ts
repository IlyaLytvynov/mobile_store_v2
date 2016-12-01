/**
 * Created by IlyaLitvinov on 28.11.16.
 */
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "ms-navbar",
    styleUrls: ["./navbar.styl"],
    templateUrl: "navbar.component.html"
})
export class NavbarComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log("navbar init");
    }

    
}