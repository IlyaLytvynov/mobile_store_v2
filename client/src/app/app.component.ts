import { Component } from "@angular/core";
import { PhoneService } from "../common/services/phones.service";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private t: PhoneService) {
        console.log(this.t.toCount());
        console.log(this.t.toCount());
        console.log(this.t.toCount());

    }
}