import React from 'react';
import {updateCamera} from './Model/ThreeJS/SceneManager';
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
  update(){

  }
  render () {

    return(
      <div className={true===this.state.stageVisibleOnPage? "styledBkrnd" : "styledBkrndHide"}>
      <div onClick={this.menuOpen} className="menuBtn">
        <div className={true===this.state.stageVisibleOnPage? "xOne" : "hamOne"}></div>
        <div className={true===this.state.stageVisibleOnPage? "hamBeef hide" : "hamBeef"}></div>
        <div className={true===this.state.stageVisibleOnPage? "xTwo" : "hamTwo"}></div>

      </div>
      <ul className={true===this.state.stageVisibleOnPage? "show" : "hide"}>
        <li><h1 onClick={() => updateCamera('earth')} className="styledText">Earth</h1></li>
        <li><h1 onClick={() => updateCamera('sun')} className="styledText">Sun</h1></li>
        <li><h1 onClick={() => updateCamera('mars')} className="styledText">Mars</h1></li>
        <li><h1 onClick={() => updateCamera('neptune')} className="styledText">Neptune</h1></li>
        <li><h1 onClick={() => updateCamera('jupiter')} className="styledText">Jupiter</h1></li>
        <li><h1 onClick={() => updateCamera('saturn')} className="styledText">Saturn</h1></li>
        <li><h1 onClick={() => updateCamera('uranus')} className="styledText">Uranus</h1></li>
        <li><h1 onClick={() => updateCamera('venus')} className="styledText">Venus</h1></li>
        <li><h1 onClick={() => updateCamera('mercury')} className="styledText">Mercury</h1></li>
      </ul>
      </div>
    );
  }
}

export default Header;
