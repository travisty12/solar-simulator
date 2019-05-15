import React, {Component } from 'react';
import threeEntryPoint from "./ThreeJS/threeEntryPoint";
import '../../scss/index.scss';

export default class Model extends Component {

  componentDidMount() {
      threeEntryPoint(this.threeRootElement);
  }

  render () {
    return (
      <div>
        <div className="model" ref={element => this.threeRootElement = element}></div>
      </div>
    );
  }
}
