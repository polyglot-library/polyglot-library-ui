import React, { PureComponent, memo, useState } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { screenSizeSelector } from '../../modules/ui/selector'
import { 
  baseKeysSelector,
  selectedTranslateKeySelector
} from '../../modules/translation/selectors'

import { setSelectedTranslateKey } from '../../modules/translation/slice'
import { generateItems } from './makeData'

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = memo(({ data, index, style }) => {
  const selected = useSelector(selectedTranslateKeySelector)

  // Data passed to List as "itemData" is available as props.data
  const { items, toggleItemActive } = data;
  const item = items[index];

  return (
    <div
      className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      onClick={() => toggleItemActive(index)} style={style}
    >
      {item.label} is {item.key === selected?.key ? 'active' : 'inactive'}
    </div>
  );
}, areEqual);

// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
const createItemData = memoize((items, toggleItemActive) => ({
  items,
  toggleItemActive,
}));

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
function Example({ height, items, toggleItemActive, width, className }) {
  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid bypassing shouldComponentUpdate().
  const itemData = createItemData(items, toggleItemActive);
  const screenSize = useSelector(screenSizeSelector);

  const classComponent = cn('List', className)

  return (
    <List
      className={classComponent}
      height={(screenSize.height - 100) || 300}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
      toggleItemActive={toggleItemActive}
      width={screenSize.width - (screenSize.width / 2)}
    >
      {Row}
    </List>
  );
}

const ExampleWrapper = ({ className }) => {
  // const [items, setItem] = useState(generateItems(1000))
  const [items, setItem] = useState(useSelector(baseKeysSelector))
  const [lastItem, setLastItem] = useState(null)
  const dispatch = useDispatch()

  const toggleItemActive = index => {
    const item = items[index]
    dispatch(setSelectedTranslateKey(item))
  }

  return (
    <Example
      className={className}
      items={items}
      toggleItemActive={toggleItemActive}
    />
  );
}
  
export default ExampleWrapper
