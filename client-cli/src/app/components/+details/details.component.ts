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
    public tabsModel: any = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private model: PhonesService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                return this.model.getOne(params['id']);
            })
            .subscribe((phone: any) => {
                this.item = phone;

                this.tabsModel = this.prepareTabModel(phone);
            });
    }

    private prepareTabModel(data) {
        const viewModel = [];

        viewModel.push({
            id: Date.now(),
            title: 'description',
            content: data.description
        });

        viewModel.push({
            id: Date.now() + Math.ceil(Math.random() * 10000),
            title: 'specification',
            content: this.prepareSpecificationTable(data)
        });

        return viewModel;
    }

    private prepareSpecificationTable(data: any) {
        // const tableTempolate = `<table class="md__spec__table">${tableContent}</table>`;
        const {sizeAndWeight:size, price, camera, average_rating:rating, display, weight, android:os, battery} = data;
        const vm = {
            size: size['dimensions'],
            price,
            camera,
            rating,
            display,
            weight: size['weight'],
            os: os.os,
        };
        const contentTemplate = '';

        for (let key in vm) {

        }
        debugger;
    }

}
