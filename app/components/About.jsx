import React, { PropTypes } from 'react';

import styles from 'app/styles/about.scss';
import SlideIn from 'app/components/SlideIn';

export default function About({ title }) {
  return (
    <div>
      <div className={styles.tagline}>Web Developer. Software Engineer. Designer.</div>
    </div>
  );
}