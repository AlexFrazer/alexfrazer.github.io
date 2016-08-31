import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class WorkExperience extends Component {
  static propTypes = {
    title: PropTypes.string,
    start: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.instanceOf(moment)
    ])
  };
  static DEFAULT_STYLES = {
    minHeight: 100,
    borderRadius: 3,
    border: '1px solid blue',
  };
  render() {
    console.log('Rendering...')
    return (
      <Row style={WorkExperience.DEFAULT_STYLES}>
        <Col sm={4}></Col>
        <Col sm={8}></Col>
      </Row>
    )
  }
}
