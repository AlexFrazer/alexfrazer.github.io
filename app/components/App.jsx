import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Navigation from 'app/components/Navigation';
import { VelocityComponent } from 'velocity-react';

import styles from 'app/styles/app.scss';
import SlideIn from 'app/components/SlideIn';

export default class App extends Component {
  state = {
    headerRendered: false,
  };

  onHeaderRendered = () => this.setState({ headerRendered: true });

  renderContent() {
    if (this.state.headerRendered) {
      return (
        <SlideIn>
          <div>
            {this.props.children}
          </div>
        </SlideIn>
      );
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className={classnames(styles.app, styles.content)}>
        <SlideIn onComplete={this.onHeaderRendered}>
          <div className={styles.header}>
            <div className={styles.title}>Alex Frazer</div>
          </div>
        </SlideIn>
        <Navigation />
        {this.renderContent()}
      </div>
    )
  }
}