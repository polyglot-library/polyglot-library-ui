import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form'

import { selectedTranslateKeySelector } from '../../../../modules/translation/selectors'
import { updateSelectedTranslateKey } from '../../../../modules/translation/slice'

export default ({ className }) => {
  const dispatch = useDispatch();
  const selectedKey = useSelector(selectedTranslateKeySelector);

  const onSubmit = (data) => {
    dispatch(updateSelectedTranslateKey({
      key: selectedKey.key,
      label: data.label
    }))
  };

  return (
    <div className={className}>
      <div>{selectedKey?.key}</div>
      <div>Revistors: {selectedKey?.revised}</div>
      <div>Last update: {selectedKey?.lastUpdate.getTime()}</div>

      <Form
        initialValues={{
          label: selectedKey?.label
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




