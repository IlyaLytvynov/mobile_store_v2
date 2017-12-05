import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarComponent } from '../navbar/Navbar.component';
import { appConfigs } from '../../configs/app.config';
import './header.styl';

export class HeaderComponent extends Component<{}, {}> {
  render() {
    const {navbar} = appConfigs;
    return (
      <header className='global-header header'>
        <div className='header__content'>
          <NavbarComponent config={navbar}/>
        </div>
      </header>
    );
  }
}
