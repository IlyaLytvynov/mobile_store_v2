import * as React from 'react';
import { Component, PureComponent } from 'react';
import { observer } from 'mobx-react';
import { IHomeStore } from '../../containers/home/Home.store';

export interface IHomeComponentProps {
  store: IHomeStore;
}

@observer
export class HomeComponent extends Component<IHomeComponentProps, {}> {
  render() {
    const {data} = this.props.store;

    const items = data.map((str: string, i: number) => <h2 key={i}>{str}</h2>);

    return (
      <div>
        {items}
      </div>
    );
  }
}
