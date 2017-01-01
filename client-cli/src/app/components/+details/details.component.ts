import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhonesService } from '../../core/services/phones.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.styl']
})
export class DetailsComponent implements OnInit {
    public item: any = {};
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private model: PhonesService,
    ) {}

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .switchMap((params: Params) => {
                return this.model.getOne(params['id']);
            })
            .subscribe((phone: any) => {
            debugger;
                this.item = phone;
            });
    }

}
