import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import PlanetInformation from './PlanetInformation';
import {connect} from 'react-redux';

function App({planet}){

  return(
    <div>
      <Header/>
      <PlanetInformation planet={planet}/>
      <Switch>
      <Route path='/' component={Home}/>
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  planet: state
})
export default withRouter(connect(mapStateToProps)(App));
