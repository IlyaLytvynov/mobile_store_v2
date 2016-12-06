import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {IItem} from './item.interface';

@Component({
    selector: 'catalog-item',
    templateUrl: './item.component.html',
    styleUrls: ['item.component.styl']
})
export class ItemComponent implements OnInit {
    @Input() item: IItem;
    @Output() onSelect = new EventEmitter<string>();
    constructor() {}

    selectItem(id:string) {
        debugger;
        this.onSelect.emit(id);
    }
    ngOnInit() {

    }

}
