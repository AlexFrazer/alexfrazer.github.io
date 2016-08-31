import React, { Component, PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';

import flexbox from '../styles/flexbox.css';

import About from './About';
import Skills from './Skills';
import Transition from './Transition';
import WorkExperience from './WorkExperience';

export default class HomePage extends Component {
  constructor() {
    super(...arguments);
    this.state = { mounted: false };
  }
  static defaultProps = {
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    return (
      <div>
        <About
          description="Hello"
        />
      </div>
    )
  }
}
