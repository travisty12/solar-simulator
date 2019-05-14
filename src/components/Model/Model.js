import React, {Component } from 'react';
import threeEntryPoint from "./ThreeJS/threeEntryPoint";


export default class Model extends Component {

  componentDidMount() {
      threeEntryPoint(this.threeRootElement);
  }

  divStyle() {
    return {
      height: '0px'
    }
  }

  render () {
    return (
      <div>
        <div className="header-header" style={{height: '0px'}} ref={element => this.threeRootElement = element}></div>
      </div>
    );
  }
}
