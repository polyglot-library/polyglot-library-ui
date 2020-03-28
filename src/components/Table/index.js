import React, { memo } from 'react';
import { FixedSizeList as List, areEqual } from 'react-window';
import { useSelector, useDispatch } from 'react-redux';
import memoize from 'memoize-one';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { screenSizeSelector } from 'modules/ui/selector';
import {
  baseKeysSelector,
  selectedTranslateKeySelector
} from 'modules/translation/selectors';

import { setSelectedTranslateKey } from 'modules/translation/slice';
import styles from './Table.module.css';

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = memo(({ data, index, style }) => {
  // Data passed to List as "itemData" is available as props.data
  const { items, toggleItemActive, selected } = data;
  const item = items[index];

  return (
    <div
      className={ index % 2 ? styles.ItemOdd : styles.ItemEven }
      onClick={() => toggleItemActive(index)} style={style}
    >
      {item.label} is {item.key === selected?.key ? 'active' : 'inactive'}
    </div>
  );
}, areEqual);

Row.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number,
  style: PropTypes.object
};

// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
const createItemData = memoize((items, toggleItemActive, selected) => ({
  items,
  toggleItemActive,
  selected
}));

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
const Example = ({ items, toggleItemActive, className }) => {
  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid bypassing shouldComponentUpdate().
  const selected = useSelector(selectedTranslateKeySelector);
  const itemData = createItemData(items, toggleItemActive, selected);
  const screenSize = useSelector(screenSizeSelector);
  const classComponent = cn(styles.List, {
    [className]: selected
  });

  let width = screenSize.width - (screenSize.width / 2);

  if (!selected) {
    width = screenSize.width;
  }

  return (
    <List
      className={classComponent}
      height={(screenSize.height - 136) || 300}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
      toggleItemActive={toggleItemActive}
      selected={selected}
      width={width}
    >
      {Row}
    </List>
  );
};

Example.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  toggleItemActive: PropTypes.func
};

const ExampleWrapper = ({ className }) => {
  // const [items, setItem] = useState(generateItems(1000))
  const items = useSelector(baseKeysSelector);
  const dispatch = useDispatch();

  const toggleItemActive = (index) => {
    const item = items[index];
    dispatch(setSelectedTranslateKey(item));
  };

  return (
    <Example
      className={className}
      items={items}
      toggleItemActive={toggleItemActive}
    />
  );
};

ExampleWrapper.propTypes = {
  className: PropTypes.string
};

export default ExampleWrapper;
