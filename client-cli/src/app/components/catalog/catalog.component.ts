import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhonesService } from '../../core/services/phones.service';

import { IPhone } from '../../core/interfaces/phone';
import { CartService } from '../../core/services/cart.service';

@Component({
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.styl']
})
export class CatalogComponent implements OnInit {
    public items: Array<IPhone>;
    private t: any;
    private u: any;

    constructor(private model: PhonesService,
                private router: Router,
                private cartService: CartService) {
    }

    ngOnInit() {
        this.model.get().subscribe((phones: Array<IPhone>) => {
            this.items = phones;
        }, (e) => {
            throw new Error(e);
        });
        // this.t = this.cartService.items;
        // this.t.subscribe((u) => {
        //     this.u = u;
        // });

    }

    itemSelect(id: string) {
        this.router.navigate(['/details', id]);
    }

    addToCart(item: IPhone) {
        this.cartService.item = item;
    }

}
