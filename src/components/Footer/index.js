import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

const Table = ({ className }) => {
  const classComponent = cn(styles.base, className);
  return (
    <div className={classComponent}>
      Footer Demnho
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string
};

export default Table;
