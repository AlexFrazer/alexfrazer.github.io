import { v1 } from 'node-uuid';
import React, { Component, PropTypes } from 'react';

import Skill from './Skill';
import { skills } from '../resume';
import { Row, Col } from 'react-bootstrap';

export default class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  static defaultProps = {
    data: skills
  };
  renderSkills() {
    return this.props.data.map(skill => <Skill
      key={v1()}
      {...skill}
    />);
  }
  render() {
    return (
      <div className="skills">
        {this.renderSkills()}
        <hr />
      </div>
    )
  }
}
