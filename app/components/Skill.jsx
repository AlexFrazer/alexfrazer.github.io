import { v1 } from 'node-uuid';
import React, { Component, PropTypes } from 'react';
import { Tooltip, OverlayTrigger, Image, Row, Col } from 'react-bootstrap';

export default class Skill extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
  constructor() {
    super(...arguments);
    this.state = { };
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.container.className = 'animated bounceIn';
    }, 150);
  }
  render() {
    const { icon, title } = this.props;
    return (
      <div
        ref="container"
        className="title"
        style={{
          opacity: 0,
          display: 'inline-block'
        }}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id={v1()}>
              <strong>{title}</strong>
            </Tooltip>
          }
        >
          <Image
            rounded
            src={icon}
            alt={title}
            height={64}
            width={64}
          />
        </OverlayTrigger>
      </div>
    )
  }
}
