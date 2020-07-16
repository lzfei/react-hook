import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/route/privateRoute'
import Login from './pages/login'
import Main from './pages/main'
import Error404 from './pages/errorPage/404'

import './App.less';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={ Login }/>
          <PrivateRoute path="/" component={ Main }></PrivateRoute>
          <Route component={ Error404 }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
