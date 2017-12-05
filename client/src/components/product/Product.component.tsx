import * as React from 'react';
import { Component } from 'react';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  average_rating: number;
}

export interface ICatalogComponentProps {
  item: IProduct;
  key: number;
}

export class ProductComponent extends Component<ICatalogComponentProps, {}> {
  render() {
    const {name, price} = this.props.item;
    return (
      <div className='product'>
        {name}
      </div>
    );
  }
}
