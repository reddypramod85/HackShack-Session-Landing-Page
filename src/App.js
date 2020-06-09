import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import { Home, Community, Arcade, StickerWall, Schedule } from './pages/index';

const customHpe = deepMerge(hpe, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 1500,
      },
    },
  },
});

const App = () => {
  return (
    <Grommet
      theme={customHpe}
      themeMode="dark"
      full
      background="#151d29"
      style={{ overflowX: 'hidden' }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/arcade">
            <Arcade />
          </Route>
          <Route path="/stickerwall">
            <StickerWall />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
