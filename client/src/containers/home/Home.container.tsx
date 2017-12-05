import * as React from 'react';
import { Component } from 'react';
import { HomeStore } from './Home.store';

import './styles/home.styl';
import { inject, observer } from 'mobx-react';


interface IExtProps {
  ui?: any;
}

interface IntProps {
  ui: any;
}

const homeStore = new HomeStore();

@inject('routing')
@inject('ui')
@observer
export class HomeContainer extends Component<IExtProps, {}> {
  componentDidMount() {
    homeStore.fetchData();
  }

  render() {
    return (
      <main className='page-content home-page'>
        <section className='slide-show'>
          <button onClick={this.props.ui.setTitle}>test</button>
        </section>
      </main>
    );
  }
}
