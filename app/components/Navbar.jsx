import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';
import styles from '../styles/navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
  constructor() {
    super(...arguments);
    this.state = { };
  }
  render() {
    return (
      <Navbar className={styles.navbar}>
        <Navbar.Brand>
          <Link to="/">Alex Frazer</Link>
        </Navbar.Brand>
        <Nav>
        </Nav>
      </Navbar>
    )
  }
}
