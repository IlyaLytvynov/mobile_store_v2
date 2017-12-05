import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export interface IMenuItems {
  title: string;
  link: string;
}

export interface INavbarComponentProps {
  config: Array<IMenuItems>;
}
export class NavbarComponent extends Component<INavbarComponentProps, {}> {
  render() {
    const menuItems = this.props.config.map((menuItem, i) => {
      return <div className='navbar__item' key={i}>
        <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
      </div>;
    });
    return (
      <nav className='navbar'>
        {menuItems}
      </nav>
    );
  }
}
