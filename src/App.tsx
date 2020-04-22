import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route component={Page404} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
