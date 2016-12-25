import { Component, OnInit } from '@angular/core';
import { PhonesModel } from '../../core/models/phones.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private model: PhonesModel) {
    }

    ngOnInit() {
    }

}
