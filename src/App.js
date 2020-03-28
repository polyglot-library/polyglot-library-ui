import React from 'react';
import propTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { ThemeProvider, theme } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import Translation from './pages/Translation';
import { withResizeDetector } from 'react-resize-detector';
import { setScreenSize } from './modules/ui/slice';

console.info(theme.colors);

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      500: '#f25100'
    },
    brand: {
      900: '#f25100',
      800: '#f25100',
      700: '#f25100'
    }
  }
};

const App = ({ height, width }) => {
  const dispatch = useDispatch();

  useDebounce(() => {
    dispatch(setScreenSize({ height, width }));
  }, 100, [{ height, width }]
  );

  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route path="/" element={<Translation />} />
          <Route path="/translation" element={<Translation />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

App.propTypes = {
  height: propTypes.number,
  width: propTypes.number
};

export default withResizeDetector(App);
