import {
    Component,
    OnInit,
    Input,
    SimpleChange,
    trigger,
    transition,
    style,
    animate
} from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['tabs.component.styl']
})
export class TabsComponent implements OnInit {
    @Input() data: any;
    _data: any;
    activeTab: string;
    test: any;
    constructor() {
        this.test='<h1>Hello world</h1>'
    }

    ngOnInit() {
        this.activeTab = 'description';
    }

    ngOnChanges(changes: {data: SimpleChange}) {
        if (changes.data.currentValue) {
            this._data = changes.data.currentValue;
            this.activeTab = this._data.length && this._data[0].id;
        }
    }

    changeTab(id) {
        this.activeTab = id;
    }
}
