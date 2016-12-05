import { Component, OnInit, Input } from '@angular/core';
import {IItem} from './item.interface';

@Component({
    selector: 'catalog-item',
    templateUrl: './item.component.html',
    styleUrls: ['item.component.styl']
})
export class ItemComponent implements OnInit {
    @Input() item: IItem;
    constructor() {
    }

    ngOnInit() {

    }

}
