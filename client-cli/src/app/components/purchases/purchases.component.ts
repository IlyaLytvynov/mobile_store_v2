import { Component, OnInit } from '@angular/core';
import { IPhone } from '../../core/interfaces/phone';
import { CartService } from '../../core/services/cart.service';

@Component({
    selector: 'app-purchases',
    templateUrl: './purchases.component.html',
    styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
    public items;
    constructor(private cart: CartService) {
    }

    ngOnInit() {
        this.cart.store$.subscribe((items: IPhone[]) => {
             this.items = items;
        });
    }

}
