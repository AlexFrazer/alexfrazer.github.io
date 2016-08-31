import React, { Component, PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';

export default class Transition extends Component {
  static propTypes = {
    transitionName: React.PropTypes.string.isRequired,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool,
    transitionAppear: React.PropTypes.bool
  };
  static defaultProps = {
    transitionEnter: true,
    transitionLeave: true,
    transitionAppear: true
  };
  constructor() {
    super(...arguments);
    this.state = { mounted: false }
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const children = this.props.transitionAppear
      ? this.props.children
      : (this.state.mounted ? this.props.children : undefined);
    return (
      <TransitionGroup
        transitionName={this.props.transitionName}
        transitionEnter={this.props.transitionEnter}
        transitionLeave={this.props.transitionLeave}
      >
        {children}
      </TransitionGroup>
    )
  }
}
