import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhonesModel } from '../../core/models/phones.model';

import { IPhone } from '../../core/interfaces/phone'

@Component({
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.styl']
})
export class CatalogComponent implements OnInit {
    public items: Array<IPhone>;

    constructor(
        private model: PhonesModel,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.model.get().subscribe((phones: Array<IPhone>) => {
            this.items = phones
        }, (e) => {
            throw new Error(e);
        })
    }

    itemSelect(id: string) {
        debugger;
        this.router.navigate(['/details', id]);
    }

}
