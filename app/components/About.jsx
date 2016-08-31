import React, { Component, PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import { description } from '../resume';

import { Row, Col, PageHeader } from 'react-bootstrap';

export default class About extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  };
  static defaultProps = {
    description: description
  };
  constructor() {
    super(...arguments);
    this.state = { rendered: false }
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.container.className = 'animated fadeIn';
      setTimeout(() => this.setState({
        rendered: true
      }), 500);
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
        <Row>
          <Col md={2} lg={2} />
          <Col md={8} lg={8}>
            <h1>About Me</h1>
          </Col>
          <Col md={2} lg={2} />
        </Row>
        <Row>
          <Col md={2} lg={2} />
          <Col md={8} lg={8}>
            <p className="lead">{this.props.description}</p>
          </Col>
          <Col md={2} lg={2} />
        </Row>
        <hr />
        {this.state.rendered && this.props.children}
      </div>
    )
  }
}
