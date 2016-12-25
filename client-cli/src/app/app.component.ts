import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './core/services/cart.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.styl']
})
export class AppComponent {
    title = 'app works!';
    appMenuItems: Array<any> = [
        {
            route: '/catalog',
            title: 'catalog'
        },
        {
            route: '/about',
            title: 'about'
        }
    ];

    constructor(private router: Router, private cartService: CartService) {
    }

    navigateTo(route) {
        this.router.navigate([`${route}`]);
    }

    ngOnInit() {
    }


}
