import React, { Component, PropTypes } from 'react';

import Navbar from './Navbar';
import flexbox from '../styles/flexbox.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  static childContextTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };
  constructor() {
    super(...arguments);
    this.state = { height: 0, width: 0 }
  }
  getChildContext() {
    return this.state;
  }
  render() {
    return (
      <div className={flexbox.container}>
        <header><Navbar /></header>
        <main className={flexbox.content}>{this.props.children}</main>
        <footer></footer>
      </div>
    )
  }
}
