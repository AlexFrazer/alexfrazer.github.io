import React, { Component, PropTypes } from 'react';
import Navigation from 'app/components/Navigation';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Navigation />
        {children}
      </div>
    )
  }
}