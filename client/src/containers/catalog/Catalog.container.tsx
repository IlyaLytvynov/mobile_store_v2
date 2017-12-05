import * as React from 'react';
import { Component } from 'react';
import { RouterStore } from 'mobx-react-router';
import { DomainCatalogStore } from './Catalog.store';
import { observer } from 'mobx-react';
import { ProductListComponent } from '../../components/product-list/Product-list.component';

interface IExtProps {
  routing?: RouterStore;
}

interface INtProps {
  routing: RouterStore;
}

@observer
export class CatalogContainer extends Component<IExtProps, {}> {
  private store: DomainCatalogStore = new DomainCatalogStore();

  render() {
    const {products} = this.store;

    return (
      <ProductListComponent items={products}/>
    );
  }
}

