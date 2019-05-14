import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  const [sceneCamera, setCamera] = useState('earth');

  function earthFunction(){
    console.log("earth app")
  }
  return(
    <div>
    <Header earthFunction={earthFunction}/>
    <Switch>
    <Route path='/' render={() => <Home camera={sceneCamera}/>}/>
    <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default withRouter(App);
