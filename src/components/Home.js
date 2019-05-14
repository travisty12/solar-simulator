import React from 'react';
import Model from './Model/Model';

function Home(props){
  console.log(props, "in home component")
  return(
    <div>
      <Model/>
      <h1>Home Component</h1>
    </div>
  );
}

export default Home;
