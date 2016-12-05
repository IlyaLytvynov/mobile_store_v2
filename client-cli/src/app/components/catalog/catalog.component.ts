import { Component, OnInit } from '@angular/core';
import {PhonesModel } from '../../core/models/phones.model';

import {IPhone} from '../../core/interfaces/phone'

@Component({
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.styl']
})
export class CatalogComponent implements OnInit {
    public items: Array<IPhone>;
    constructor(private model: PhonesModel) {
    }

    ngOnInit() {
        this.model.get().subscribe((phones:Array<IPhone>) =>{
            this.items = phones
        }, (e) => {
            throw new Error(e);
        })

    }

}
