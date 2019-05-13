import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default withRouter(App);
