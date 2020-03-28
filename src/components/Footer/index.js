import React from 'react';
import cn from 'classnames';

import styles from './Footer.module.css';

export default ({ className }) => {
  const classComponent = cn(styles.base, className);
  return (
    <div className={classComponent}>
      Footer Demnho
    </div>
  );
};
