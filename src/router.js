import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home';
import DemoPage from './routes/DemoPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/demo" exact component={DemoPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
