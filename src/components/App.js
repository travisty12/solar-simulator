import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import PlanetInformation from './PlanetInformation';
function App(){
  const [planet, setPlanet] = useState('earth');

  function thisPlanet(info){
    setPlanet(info.planet)
  }

  return(
    <div>
      <Header newPlanet={thisPlanet}/>
      <PlanetInformation planet={planet}/>
      <Switch>
      <Route path='/' component={Home}/>
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
