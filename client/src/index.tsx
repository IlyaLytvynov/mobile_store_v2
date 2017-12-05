import * as React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { HashRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';


import { AppContainer } from './containers/app/App.container';

import './app.styl';

render(<AppContainer/>, document.getElementById('root'));
