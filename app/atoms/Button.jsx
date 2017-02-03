import React from 'react';
import classnames from 'classnames';

import styles from 'app/styles/button';

export default function Button({
  label,
  onClick,
  className,
  ...props,
}) {
  return (
    <button
      onClick={onClick}
      className={classnames(className, styles.button)}
      {...props}
    >
      {label}
    </button>
  )
}