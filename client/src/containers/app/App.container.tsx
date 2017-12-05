import * as React from 'react';
import { Component } from 'react';
import { Route, NavLink, Link, Switch, HashRouter as Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';
import { Redirect } from 'react-router';

import { CatalogContainer } from '../catalog/Catalog.container';
import { HeaderComponent } from '../../components/header/Header.component';

const routingStore = new RouterStore();
const stores = {
  routing: routingStore
};

export class AppContainer extends Component<{}, {}> {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <div className='app'>
           <HeaderComponent />
            <Switch>
              <Route path='/catalog' render={() => <CatalogContainer/>}/>
              <Redirect path='/' to='/catalog'/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
