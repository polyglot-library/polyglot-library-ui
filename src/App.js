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

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
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
