import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhonesService } from '../../core/services/phones.service';

import 'rxjs/add/operator/switchMap';

const createKeyName = (key) => {
    return key[0].toUpperCase()+key.slice(1);
};

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
            battery
        };
        const contentTemplate = this.prepareTable(vm);

       return `<table class="md__spec__table">${contentTemplate}</table>`;
    }

    private prepareTable(object) {
        let tableContent = "";
        debugger;

        for (let key in object) {
            if(typeof object[key] === 'object') {
                tableContent += `<tr class="md_spec-table__section-name"><td>${createKeyName(key)}</td></tr>`;
                for(let keyIn in object[key]) {
                    tableContent += this.prepareRow(keyIn, object[key][keyIn]);
                }

            } else {
                tableContent+= this.prepareRow(key, object[key]);
            }
        }
        debugger;
        return tableContent
    }
    private prepareRow (key: any, value:any) {
        return `<tr><td>${!isNaN(parseInt(key)) ? ' ' : createKeyName(key) }</td><td>${value}</td></tr>`;
    }
}
