import React, { Component, PropTypes } from 'react';

export default class Skill extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    const { title } = this.props;
    return (
      <div className="title">
        <h1>{title}</h1>
      </div>
    )
  }
}
