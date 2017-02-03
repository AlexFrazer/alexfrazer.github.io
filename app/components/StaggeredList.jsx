import React, { Component, PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

export default class StaggeredList extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    return this.props.children((item, i) => {
      return (
        <VelocityComponent>
        </VelocityComponent>
      )
    });
  }
}