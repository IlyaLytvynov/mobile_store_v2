import * as React from 'react';
import { Component } from 'react';
import { Route, NavLink, Link, Switch } from 'react-router-dom';

import { HomeContainer } from '../home/Home.container';
import { CatalogContainer } from '../catalog/Catalog.container';


export class AppContainer extends Component<{}, {}> {
  render() {
    return (
      <div className='app'>
        <nav>
          <NavLink exact to='/'>home</NavLink>
          <NavLink to='/catalog'>Catalog</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <HomeContainer/>}/>
          <Route path='/catalog' render={() => <CatalogContainer/>}/>
        </Switch>
      </div>
    );
  }
}
