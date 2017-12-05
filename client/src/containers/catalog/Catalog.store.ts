import { action, computed, observable, toJS } from 'mobx';
import { appConfigs } from '../../configs/app.config';
import { get } from '../../utils/Ajax.helper';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../../components/product/Product.component';

export class DomainCatalogStore {
  private _baseUrl: string = appConfigs.baseUrl + '/phones';
  private _get$: Observable<any> = get(this._baseUrl);

  @observable
  private _products: Array<IProduct> = [];

  constructor() {
    this.fetch();
  }

  private fetch() {
    this._get$.subscribe(this.updateItems.bind(this));
  }

  @computed
  get products() {
    return toJS(this._products);
  }

  @action
  private updateItems(items: Array<IProduct>) {
    this._products = observable(items);
  }
}
