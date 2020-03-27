import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import {
  optionsLanguagesSelector,
  baseLanguageObjectSelector
} from '../../selectors'

import { setSelectedLanguage } from '../../slice'
import styles from './LanguageConfig.module.css';

const LanguageConfig = () => {
  const dispatch = useDispatch();
  const optionsLanguages = useSelector(optionsLanguagesSelector);
  const baseLanguage = useSelector(baseLanguageObjectSelector);
  
  console.info(baseLanguage)

  const changeLanguageHandler = (event) => {
    dispatch(setSelectedLanguage(event.target.value));
  };

  return (
    <div className={styles.base}>
      <div className={styles.col}>
        <div className={styles.languageSelected}>
          {baseLanguage.label}
        </div>
      </div>

      <div className={styles.col}>
        <div className={styles.languageOptions}>
          <select onChange={changeLanguageHandler}>
          {optionsLanguages.map(lang =>
            <option key={lang.key} value={lang.key}>{lang.label}</option>
          )};
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageConfig;
