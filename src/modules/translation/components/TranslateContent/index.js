import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import cn from 'classnames';

import styles from './TrasnlateContent.module.css';
import { selectedTranslateKeySelector } from 'modules/translation/selectors';
import { updateSelectedTranslateKey } from 'modules/translation/slice';

const TranslateContent = ({ className }) => {
  const dispatch = useDispatch();
  const translatedKey = useSelector(selectedTranslateKeySelector);

  const onSubmit = (data) => {
    dispatch(updateSelectedTranslateKey({
      key: translatedKey.key,
      label: data.label
    }));
  };

  const classComponent = cn(className, styles.TranslateContent, {
    [styles.hidden]: !translatedKey
  });

  return (
    <div className={classComponent}>
      <div>{ translatedKey?.key }</div>
      <div>Revistors: {translatedKey?.revised}</div>
      <div>Last update: { translatedKey?.lastUpdate?.getTime() }</div>

      <Form
        initialValues={{
          label: translatedKey?.label
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="label"
              render={({ input, meta }) => (
                <div>
                  <label>Tradução</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

TranslateContent.propTypes = {
  className: propTypes.string
};

export default TranslateContent;
