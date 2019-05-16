import React from 'react';
import {updateCamera} from './Model/ThreeJS/SceneManager';
import {connect} from 'react-redux';
import {updatePlanet} from '../actions'

class Header extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      stageVisibleOnPage: false,
    }
    this.menuOpen = this.menuOpen.bind(this);
  }

  menuOpen() {
    this.setState(prevState => ({
      stageVisibleOnPage: !prevState.stageVisibleOnPage
    }))
  }
  update(planet){
    const {dispatch} = this.props;
    this.menuOpen();
    updateCamera(planet);
    dispatch(updatePlanet(planet))
  }
  render () {

    return(
      <div className={this.state.stageVisibleOnPage? "styledBkrnd" : "styledBkrndHide"}>
      <div onClick={this.menuOpen} className="menuBtn">
        <div className={this.state.stageVisibleOnPage? "xOne" : "hamOne"}></div>
        <div className={this.state.stageVisibleOnPage? "hideBeef" : "hamBeef"}></div>
        <div className={this.state.stageVisibleOnPage? "xTwo" : "hamTwo"}></div>

      </div>
        <div className="menu">
          <div className={this.state.stageVisibleOnPage? "show" : "hide"}>
            <h1 onClick={() => this.update('sun')}>Sun</h1>
            <h1 onClick={() => this.update('mercury')}>Mercury</h1>
            <h1 onClick={() => this.update('venus')}>Venus</h1>
            <h1 onClick={() => this.update('earth')}>Earth</h1>
            <h1 onClick={() => this.update('mars')}>Mars</h1>
            <h1 onClick={() => this.update('jupiter')}>Jupiter</h1>
            <h1 onClick={() => this.update('saturn')}>Saturn</h1>
            <h1 onClick={() => this.update('uranus')}>Uranus</h1>
            <h1 onClick={() => this.update('neptune')}>Neptune</h1>
            <h1 onClick={() => this.update('pluto')}>Pluto</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
