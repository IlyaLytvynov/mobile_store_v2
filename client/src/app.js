import React, { Component } from 'react';
import {observer} from 'mobx-react'
import logo from './logo.svg';
import './App.css';

@observer
class App extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.state.setItem();
  }
  render() {
    return (
      <div className="App">
        {this.props.state.items.length}
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default App;
