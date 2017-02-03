import React, { PropTypes } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

export default function SlideIn({
  children,
  onComplete = () => {},
  ...props
}) {
  return (
    <VelocityTransitionGroup
      runOnMount
      enter={{
        duration: 500,
        animation: {
          opacity: [1, 0],
          translateY: [0, 50],
          complete: onComplete,
        }
      }}
      leave={{
        duration: 500,
        animation: {
          opacity: [0, 1],
          translateY: [-50, 0],
        }
      }}
    >
      {children}
    </VelocityTransitionGroup>
  )
}

SlideIn.propTypes = {
  children: PropTypes.element.isRequired,
};