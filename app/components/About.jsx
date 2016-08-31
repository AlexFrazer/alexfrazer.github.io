import React, { Component, PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import { description } from '../resume';

export default class About extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  };
  static defaultProps = {
    description: description
  };
  constructor() {
    super(...arguments);
    this.state = { ready: false }
  }
  componentDidMount() {
    console.log(this.refs.container)
    setTimeout(() => {
      this.refs.container.className = 'animated fadeIn';
    }, 150);
  }
  render() {
    return (
      <div
        style={{
          opacity: 0,
          textAlign: 'center'
        }}
        ref="container"
      >
        <h1>About Me</h1>
        <p className="lead">{this.props.description}</p>
      </div>
    )
  }
}
