import * as React from 'react';
import { Component } from 'react';
import { IProduct, ProductComponent } from './product/Product.component';

export interface IProductListComponentProps {
  items: Array<IProduct>;
}

export enum SortingParams {
  lowPrice,  highPrice, name
}

export interface IStateProductListComponent {
  sortBy?: SortingParams;
  list: Array<IProduct>;
}

export class ProductListComponent extends Component<IProductListComponentProps, {}> {
  render() {
    const elements = this.props.items.map((item, i) => ( <ProductComponent item={item} key={i}/>));
    return (
      <div>
        {elements}
      </div>
    );
  }
}
