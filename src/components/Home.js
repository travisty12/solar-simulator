import React from 'react';
import Model from './Model/Model';
import {connect} from 'react-redux';

function Home({dispatch}){

  return(
    <div>
      <Model/>
    </div>
  );
}

export default Home;
