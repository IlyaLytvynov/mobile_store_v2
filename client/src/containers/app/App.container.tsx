import * as React from 'react';
import { Component } from 'react';
import { Route, NavLink, Link, Switch, HashRouter as Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { HomeContainer } from '../home/Home.container';
import { CatalogContainer } from '../catalog/Catalog.container';

import { Provider } from 'mobx-react';
import { Redirect } from 'react-router';

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
            <nav>
              <NavLink to='/catalog'>Catalog</NavLink>
            </nav>
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
