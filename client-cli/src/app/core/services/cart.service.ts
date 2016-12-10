import { Injectable } from '@angular/core';
import { IPhone } from '../interfaces/phone';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
    private dataStore: IPhone[] = [];
    private _store: BehaviorSubject<IPhone[]> = new BehaviorSubject(this.dataStore);
    private _test: BehaviorSubject<Number> = new BehaviorSubject(this.dataStore.length);

    public store$ = this._store.asObservable();
    public storeCount$ = this._test.asObservable();

    constructor() {
    }

    set item(item: IPhone) {
        this.dataStore.push(item);
        this._store.next(this.dataStore);
        this._test.next(this.dataStore.length);
    }
}
