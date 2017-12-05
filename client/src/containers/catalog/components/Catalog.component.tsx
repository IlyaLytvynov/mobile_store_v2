import * as React from 'react';
import { Component } from 'react';
import { ProductListComponent } from './product-list/Product-list.component';
import { IProduct } from './product-list/product/Product.component';

export interface ICatalogComponentProps {
  products: Array<IProduct>;
}

export class CatalogComponent extends Component<ICatalogComponentProps, {}> {
  render() {
    const {products} = this.props;
    return (
      <div>
        <div className='catalog__header'></div>
        <div className='catalog__content'>
          <ProductListComponent items={products}/>
        </div>
      </div>
    );
  }
}
