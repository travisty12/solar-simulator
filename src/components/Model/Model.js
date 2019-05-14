import React, {Component } from 'react';
import threeEntryPoint from "./ThreeJS/threeEntryPoint";


export default class Model extends Component {

  componentDidMount() {
      threeEntryPoint(this.threeRootElement);
  }

  render () {
    return (
      <div>
        <div className="header-header" ref={element => this.threeRootElement = element}></div>
      </div>
    );
  }
}
