import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

// @import "../../base.styl";
// @import "../../variables.styl";

@Component({
    moduleId: module.id.toString(),
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.styl']
})
export class NavbarComponent implements OnInit {
    @Input() menuElements: any;
    @Output() onSelect = new EventEmitter<string>();

    itemsInCart: Number = 0;

    constructor(private cart: CartService) {
    }

    ngOnInit() {
        this.cart.storeCount$.subscribe((countOfItems: number) => {
            this.itemsInCart = countOfItems;
        });
    }

    routeSelect(route: string) {
        this.onSelect.emit(route);
    }

}
