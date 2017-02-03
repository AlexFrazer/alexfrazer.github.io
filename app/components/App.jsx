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
    const { headerRendered: ready } = this.state;

    return (
      <VelocityComponent
        delay={500}
        duration={1000}
        animation={{
          opacity: ready ? 1 : 0,
          translateX: ready ? 0 : -25,
        }}
      >
        <div className={styles.content}>
          {this.props.children}
        </div>
      </VelocityComponent>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.app}>
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