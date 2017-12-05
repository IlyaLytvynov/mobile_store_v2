import * as React from 'react';
import { Component } from 'react';
import { CatalogComponent, ICatalogComponentProps } from './components/Catalog.component';
import { RouterStore } from 'mobx-react-router';
import { DomainCatalogStore } from './Catalog.store';
import { observer } from 'mobx-react';

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
      <CatalogComponent products={products}/>
    );
  }
}

