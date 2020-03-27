import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { ThemeProvider, theme } from "@chakra-ui/core";
import { Provider, useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';

import store from './store';
import Translation from './pages/Translation'
import { withResizeDetector } from 'react-resize-detector';
import { setScreenSize } from './modules/ui/slice';

console.info(theme.colors)

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      500: '#f25100'
    },
    brand: {
      900: "#f25100",
      800: "#f25100",
      700: "#f25100",
    },
  },
};

const App = ({height, width}) => {
  const dispatch = useDispatch()
  const [screen, setScreen] = React.useState({height, width});

  const [, cancel] = useDebounce(() => {
      dispatch(setScreenSize({ height, width }))
    }, 100, [{height, width}]
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
  )
}

export default withResizeDetector(App);
